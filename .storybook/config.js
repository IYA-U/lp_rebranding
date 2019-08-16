import React from 'react';
import { ThemeProvider } from 'styled-components';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { themes as storybookTheme } from '@storybook/theming';
import { contexts } from './contexts';
import { Config } from './contexts';

import '../styleConfigs/global.css';
import GlobalStyle from '../styleConfigs/globalStyle';

const defaultTheme = {
  colors: {
    white: '#fff',
    bright: '#EFCB05',
    dark: '#4E00AA',
    black: '#000000',
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

addParameters({
  options: {
    theme: storybookTheme.dark,
  },
});
addDecorator(withContexts(contexts));

addDecorator((story) => (
  <Config.Provider value={defaultTheme}>
    <ThemeProvider theme={defaultTheme}>{story()}</ThemeProvider>
  </Config.Provider>
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
