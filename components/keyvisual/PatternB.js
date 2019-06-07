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
          srcSet="/static/img/keyvisual/main/pc/scroll-horizontal.jpg"
        />
        <source
          media="(min-width: 640px)"
          srcSet="/static/img/keyvisual/main/sp/scroll-horizontal.jpg"
        />
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
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  @media ${device.TAB} {
    flex-direction: row-reverse;
  }
`;

const InfoArea = styled.div`
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  height: 40%;
  justify-content: center;
  padding: 30px;
  position: relative;
  width: 100%;
  z-index: 5;
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
  overflow: hidden;
  width: 100%;
  @media ${device.TAB} {
    height: 100%;
    width: 60%;
  }
  img {
    animation: ${imgSlideHorizontal} 150s linear infinite;
    height: 100%;
    max-height: 100%;
    max-width: none;
    width: auto;
    @media ${device.TAB} {
      height: 100%;
    }
  }
`;

export default PatternB;
