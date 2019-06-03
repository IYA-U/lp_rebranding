import React from 'react';
import styled, { keyframes } from 'styled-components';
import device from '../../styleConfigs/breakPoints';

import InfoBlock from './Common/infoBlock';

const PatternB = () => (
  <Wrap>
    <PictureArea>
      <picture>
        <source
          media="(max-width: 639px)"
          srcSet="/static/img/keyvisual/main/pc/scroll-horizontal.jpg" />
        <source
          media="(min-width: 640px)"
          srcSet="/static/img/keyvisual/main/sp/scroll-horizontal.jpg" />
        <img
          src="/static/img/keyvisual/main/pc/scroll-horizontal.jpg"
          alt="" />
      </picture>
    </PictureArea>
    <InfoArea>
      <InfoBlock />
    </InfoArea>
  </Wrap>
);

const Wrap = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  @media ${device.TAB} {
    flex-direction: row-reverse;
  }
`;

const InfoArea = styled.div`
  position: relative;
  z-index: 5;
  height: 40%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  padding: 30px;
  display: flex;
  justify-content: center;
  @media ${device.TAB} {
    height: 100%;
    width: 40%;
  }
`;

const imgSlideHorizontal = keyframes`
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(-100%);
  }
`;

const PictureArea = styled.div`
  height: 60%;
  width: 100%;
  overflow: hidden;
  @media ${device.TAB} {
    height: 100%;
    width: 60%;
  }
  img {
    animation: ${imgSlideHorizontal} 150s linear infinite;
    height: 100%;
    width: auto;
    max-height: 100%;
    max-width: none;
    @media ${device.TAB} {
      height: 100%;
    }
  }
`;

export default PatternB;
