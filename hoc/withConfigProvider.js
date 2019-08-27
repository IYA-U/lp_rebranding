import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useWindowSize } from 'react-use';
export const ConfigContext = React.createContext();

const withConfigProvider = (WrappedComponent, colorConfig) => {
  const EnchantedComponent = props => {
    const { width, height } = useWindowSize();
    const globalConfig = {
      colorConfig: { 
        mode: colorConfig.mode,
        colors: {
          white: {
            hue: 0,
            saturation: 0,
            lightness: 100,
          },
          bright: colorConfig.colors.bright,
          dark: colorConfig.colors.dark,
          black: {
            hue: 0,
            saturation: 0,
            lightness: 0,
          },
        },
      },
      device: {
        windowHeight: height,
        windowWidth: width,
      },
    };

    return (
      <ConfigContext.Provider value={globalConfig}>
        <ThemeProvider theme={globalConfig}>
          <WrappedComponent {...props} />
        </ThemeProvider>
      </ConfigContext.Provider>
    );
  };
  EnchantedComponent.displayName = 'EnchantedComponent';
  return EnchantedComponent;
};

export default withConfigProvider;
