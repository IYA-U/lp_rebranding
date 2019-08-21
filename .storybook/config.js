import React from 'react';

import { configure, addDecorator, addParameters } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { contexts } from './contexts';
import { Config } from './contexts';
import '../styleConfigs/global.css';
import GlobalStyle from '../styleConfigs/globalStyle';

const defaultTheme = {
  colorConfig: {
    mode: 'light',
    colors: {
      white: {
        hue: 0,
        saturation: 0,
        lightness: 100,
      },
      bright: {
        hue: 50,
        saturation: 95,
        lightness: 47,
      },
      dark: {
        hue: 267,
        saturation: 100,
        lightness: 33,
      },
      black: {
        hue: 0,
        saturation: 0,
        lightness: 0,
      },
    },
  },
};

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {storyFn()}
    </React.Fragment>
  );
}

addDecorator(withGlobalStyles);

addDecorator(withContexts(contexts));

addDecorator((story) => (
  <Config.Provider value={defaultTheme}>{story()}</Config.Provider>
));

addParameters({
  viewport: {
    viewports: {
      レスポンシブ: {
        name: 'レスポンシブ',
        styles: {
          width: '100%',
          height: '100%',
        },
        type: 'desktop',
      },
      スマホ: {
        name: 'スマホ',
        styles: {
          width: '375px',
          height: '560px',
        },
        type: 'mobile',
      },
    },
  },
});

configure(loadStories, module);
