import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { Config } from '../Layout/withLayout';
import { Config as ConfigStorybook } from '../../.storybook/contexts';

const withColorsProp = (ChildComponent, PARTS_COLOR_MAPS) => (props) => {
  const PARTS_COLOR_MAP = PARTS_COLOR_MAPS[props.colorPtnId];
  const config = useContext(Config);
  const storyBookConfig = useContext(ConfigStorybook);
  const isStorybook = !config;
  const themeColors = isStorybook ? storyBookConfig.colors : config.colors;

  const colors = {};
  Object.keys(PARTS_COLOR_MAP).forEach((part) => {
    colors[part] = themeColors[PARTS_COLOR_MAP[part]];
  });

  return (
    <ThemeProvider theme={colors}>
      <ChildComponent {...props} />
    </ThemeProvider>
  );
};

export default withColorsProp;
