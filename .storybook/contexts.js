import React from 'react';

export const Config = React.createContext();

export const contexts = [
  {
    icon: 'paintbrush',
    title: 'JoJo', // an unique name of a contextual environment
    params: [
      // an array of params contains a set of predefined `props` for `components`
      {
        name: 'JoJo',
        props: {
          colors: {
            white: '#fff',
            bright: '#EFCB05',
            dark: '#ff00ff',
            black: '#000000',
          },
        },
      },
    ],
    options: {
      deep: true, // pass the `props` deeply into all wrapping components
      disable: false, // disable this contextual environment completely
      cancelable: true,
    },
  },
  /* ... */ // multiple contexts setups are supported
];
