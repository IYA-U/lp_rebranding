import React, { useState } from 'react';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

const FlipCard = ({ front, back, flipped }) => {
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(375px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <Wrap>
      <FrontCard
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        {front}
      </FrontCard>
      <Card
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      >
        {back}
      </Card>
    </Wrap>
  );
};

const Wrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const Card = styled(animated.div)`
  position: absolute;
  top: 0;
  cursor: pointer;
  will-change: transform, opacity;
`;

const FrontCard = styled(Card)`
  position: relative;
`;

export default FlipCard;
