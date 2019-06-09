import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import useInterval from '../../util/useInterval';

const FlipCard = ({ contents }) => {
  const [flipCount, setflipCount] = useState(0);
  const [contentIndex, setContentIndex] = useState(0);
  const isOdd = (flipCount + 2) % 2 === 0;

  useInterval(() => {
    setflipCount(flipCount + 1);
    setTimeout(() => {
      if (contentIndex >= contents.length - 2) {
        setContentIndex(0);
      } else if (!isOdd) {
        setContentIndex(contentIndex + 2);
      }
    }, 150);
  }, 3000);

  const animationConfig = { mass: 3, tension: 500, friction: 80 };

  const cardAnimationOdd = useSpring({
    opacity: isOdd ? 1 : 0,
    transform: `perspective(100vw) rotateX(${flipCount * 180}deg)`,
    config: animationConfig,
  });

  const cardAnimationEven = useSpring({
    opacity: isOdd ? 0 : 1,
    transform: `perspective(100vw) rotateX(${flipCount * 180}deg) scale(1,-1)`,
    config: animationConfig,
  });

  return (
    <Wrap>
      <CardOdd style={cardAnimationOdd}>{contents[contentIndex]}</CardOdd>
      <CardEven style={cardAnimationEven}>
        {contentIndex === contents.length - 1
          ? contents[0]
          : contents[contentIndex + 1]}
      </CardEven>
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
  top: 0;
  cursor: pointer;
  will-change: transform, opacity;
  width: 100%;
`;

const CardOdd = styled(Card)`
  position: relative;
  background-color: darkblue;
`;
const CardEven = styled(Card)`
  position: absolute;
  background-color: green;
`;
export default FlipCard;
