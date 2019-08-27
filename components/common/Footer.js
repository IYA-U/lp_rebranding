import React from 'react';
import styled from 'styled-components';
import { media } from '../../styleConfigs/breakPoints';

const Footer = () => (
  <Wrap>
    <Img src="/static/img/logo--white.png" />
  </Wrap>
);

const Wrap = styled.div`
  background-color: #000000;
  background-image: url('/static/img/footer/footer_bg_sp.png');
  background-position: top right;
  background-repeat: no-repeat;
  background-size: auto 150px;
  height: 150px;
  position: relative;
  @media ${media.md} {
    background-image: url('/static/img/footer/footer_bg_pc.png');
    height: 300px;
    background-size: auto 300px;
  }
`;
const Img = styled.img`
  bottom: 0;
  left: 32px;
  margin: auto 0;
  position: absolute;
  top: 0;
  width: 125px;
  @media ${media.md} {
    width: 260px;
    left: 184px;
  }
`;

export default Footer;
