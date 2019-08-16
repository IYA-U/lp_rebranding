import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import dynamic from 'next/dynamic';
import { Config } from '../Layout/withLayout';
import { Config as ConfigStorybook } from '../../.storybook/contexts';

const withColorProps = (ChildComponent, COLOR_PATTERNS) => (props) => {
  const config = useContext(Config);
  const storyBookConfig = useContext(ConfigStorybook);

  console.log({ storyBookConfig });

  const COLOR_PATTERN = config
    ? COLOR_PATTERNS(config.colors)[props.colorPtnId]
    : COLOR_PATTERNS(storyBookConfig.colors)[props.colorPtnId];

  return (
    <ThemeProvider theme={COLOR_PATTERN}>
      <ChildComponent {...props} />
    </ThemeProvider>
  );
};

export default withColorProps;
