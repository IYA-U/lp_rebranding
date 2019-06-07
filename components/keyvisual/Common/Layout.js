import React from 'react';
import styled from 'styled-components';
import device from '../../../styleConfigs/breakPoints';
import Logo from './logo';

const Layout = ({ children }) => (
  <Wrap>
    <Logo />
    <GeometricWrap>
      <Geometric />
    </GeometricWrap>
    <MainWrap>{children}</MainWrap>
  </Wrap>
);

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
  height: 60px;
  overflow: hidden;
  width: 100%;
  @media ${device.TAB} {
    height: 100%;
    width: 75px;
  }
`;

const MainWrap = styled.div`
  height: calc(100% - 60px);
  width: 100%;
  @media ${device.TAB} {
    height: 100%;
    width: calc(100% - 75px);
  }
`;

const Geometric = styled.div`
  background-image: url('/static/img/keyvisual/geometric/sp/geometric.png');
  background-position: top left;
  background-size: auto 60px;
  display: block;
  height: 60px;
  max-width: 100%;
  @media ${device.TAB} {
    background-size: 75px auto;
    top: 80px;
    max-width: 80px;
    background-image: url('/static/img/keyvisual/geometric/pc/geometric.png');
    height: 100%;
  }
`;

export default Layout;
