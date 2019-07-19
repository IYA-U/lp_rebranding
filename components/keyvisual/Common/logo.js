import React from 'react';
import styled from 'styled-components';
import device from '../../../styleConfigs/breakPoints';

const logo = () => <Img src="/static/img/keyvisual/logo.png" />;

const Img = styled.img`
  left: 0;
  position: absolute;
  top: 0;
  width: 60px;
  z-index: 11;
  @media ${device.TAB} {
    width: 76px;
  }
`;

export default logo;
