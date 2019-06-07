import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
export const Config = React.createContext();

const withLayout = (ComposedComponent) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: {
        primary: '#00D0B0',
      },
      device: {
        windowHeight: 0,
        windowWidth: 0,
        isPc: false,
      },
    };
  }

    displayName = `withLayout(${ComposedComponent.displayName
      || ComposedComponent.name
      || 'Component'})`;

    static async getInitialProps(ctx) {
      if (ComposedComponent.getInitialProps) {
        return ComposedComponent.getInitialProps(ctx);
      }

      return {};
    }

    componentDidMount() {
      const params = new URLSearchParams(window.location.search);
      for (const [key, value] of params) {
        this.setState({
          [key]: value,
        });
      }

      this.updateWindowSize();
      window.addEventListener('resize', () => {
        this.updateWindowSize();
      });
    }

    updateWindowSize = () => {
      this.setState({
        device: {
          windowHeight: window.innerHeight,
          windowWidth: window.innerWidth,
          isPc: window.innerWidth > 640,
        },
      });
    };

    render() {
      return (
        <Config.Provider value={this.state}>
          <ThemeProvider theme={this.state}>
            <ComposedComponent {...this.props} />
          </ThemeProvider>
        </Config.Provider>
      );
    }
};

export default withLayout;
