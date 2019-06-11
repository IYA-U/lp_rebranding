import React from 'react';
import styled from 'styled-components';
import device from '../../styleConfigs/breakPoints';

const Footer = () => {
  return (
    <Wrap>
      <Img src="/static/img/logo--white.png" />
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: #000000;
  height: 150px;
  position: relative;
  background-image: url('/static/img/footer/footer_bg_sp.png');
  background-position: top right;
  background-size: auto 150px;
  background-repeat: no-repeat;
  @media ${device.TAB} {
    background-image: url('/static/img/footer/footer_bg_pc.png');
    height: 300px;
    background-size: auto 300px;
  }
`;
const Img = styled.img`
  width: 125px;
  top: 0;
  bottom: 0;
  left: 32px;
  position: absolute;
  margin: auto 0;
  @media ${device.TAB} {
    width: 260px;
    left: 184px;
  }
`;

export default Footer;
