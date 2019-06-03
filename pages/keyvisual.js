import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import dynamic from 'next/dynamic';
import device from '../styleConfigs/breakPoints';
import Logo from '../components/keyvisual/Common/logo';
import Geometric from '../components/keyvisual/Common/geometric';

export const Config = React.createContext();

class Keyvisual extends Component {
  constructor(props) {
    super(props);

    this.state = {
      device: {
        windowHeight: 0,
        windowWidth: 0,
        isPc: false,
      },
      subPattern: 'center',
      mainImg: 'BRIDGE.png',
      infoBlockImage: './img/info/teiichi.png',
      ctaColor: '#42A0D8',
      sildeSpeed: '1',
      infoAreaColor: '#192330',
      hasGradient: 'true',
      infoBlockSmallText: '充実のライナップ！<br/>何かのテキストが2行',
      infoBlockBigText: '',
      infoBlockTextColor: 'white',
      pictureAreaColor: '#666666',
    };
  }

  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    for (const key of params.keys()) {
      this.setState({
        [key]: params.get(key),
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
        isPc: window.innerWidth >= 800,
      },
    });
  };

  render() {
    const PageComponentName = this.state.pattern;
    let DynamicComponent;
    if (this.state.pattern) {
      DynamicComponent = dynamic(
        () => import(`../components/keyvisual/${PageComponentName}`),
        {
          ssr: false,
        },
      );
    } else {
      DynamicComponent = dynamic(() => import('../components/keyvisual/Switcher'),);
    }

    return (
      <>
        <Config.Provider value={this.state}>
          <ThemeProvider theme={this.state}>
            <Wrap>
              <Logo />
              <GeometricWrap>
                <Geometric />
              </GeometricWrap>
              <MainWrap>
                <DynamicComponent />
              </MainWrap>
            </Wrap>
          </ThemeProvider>
        </Config.Provider>
      </>
    );
  }
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  height: ${({ theme }) => `${theme.device.windowHeight}px`};
  overflow: hidden;
  position: relative;
  width: 100%;
  　 @media ${device.TAB} {
    flex-direction: 'row';
  }
`;

const GeometricWrap = styled.div`
  height: 50px;
  overflow: hidden;
  width: 100%;
  @media ${device.TAB} {
    height: 100%;
    width: 75px;
  }
`;

const MainWrap = styled.div`
  height: calc(100% - 50px);
  width: 100%;
  @media ${device.TAB} {
    height: 100%;
    width: calc(100% - 75px);
  }
`;

export default Keyvisual;
