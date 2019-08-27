import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ConfigContext } from '../withConfigProvider';
import createCssValue from './createCssValue';
import { Config as ConfigStorybook } from '../../.storybook/contexts';

// 1パーツに対する色設定を表すよう、ThemeProviderを上書きする
const withColorPropsWithMap = (ChildComponent, COLOR_MAPS) => (props) => {
  // 全体設定の取得
  const siteConfig = useContext(ConfigContext);
  const storyBookConfig = useContext(ConfigStorybook);
  const isStorybook = Boolean(storyBookConfig);
  const config = isStorybook ? storyBookConfig : siteConfig;
  const themeColors = config.colorConfig.colors;
  const { mode } = config.colorConfig;

  // 該当パーツ・パターンの色名マップの抜き出し
  const colorNameMap = COLOR_MAPS[mode][props.colorPtnId];

  // CSS色指定マップの生成
  const colorMap = {};
  Object.keys(colorNameMap).forEach((partName) => {
    colorMap[partName] = createCssValue({
      themeColors,
      colorName: colorNameMap[partName],
    });
  });
  return (
    <ThemeProvider theme={colorMap}>
      <ChildComponent {...props} />
    </ThemeProvider>
  );
};

export default withColorPropsWithMap;
