import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { media } from '../../styleConfigs/breakPoints';
import InfoBlock from './Common/infoBlock--animated';
import ThumbNails from './Common/thumbnails--animated';

const PatternB = () => {
  const infoAreaAnimation = useSpring({
    delay: 1500,
    to: {
      height: '45%',
    },
    from: { height: '100%' },
  });
  return (
    <Wrap>
      <PictureArea>
        <ThumbNails />
      </PictureArea>
      <InfoArea style={infoAreaAnimation}>
        <InfoBlock />
      </InfoArea>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: rgba(0, 0, 0, 0.95);
  background-repeat: no-repeat;

  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  @media ${media.md} {
    flex-direction: row-reverse;
  }
`;

const InfoArea = styled(animated.div)`
  background-color: rgba(0, 0, 0, 0.95);
  bottom: 0;
  height: 45%;
  justify-content: center;
  /* height: 100%; */
  left: 0;

  padding: 20px 30px 0px;
  position: absolute;
  width: 100%;
  z-index: 5;
  @media ${media.md} {
    height: 100%;
    width: 40%;
  }
`;

const PictureArea = styled.div`
  height: 60%;
  left: 0;
  overflow: hidden;
  position: relative;
  top: 0;
  width: 100%;
  @media ${media.md} {
    height: 100%;
    width: 60%;
  }
`;

export default PatternB;
