import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import useInterval from '../../../util/useInterval';
import FlipCard from '../../common/FlipCard';
import device from '../../../styleConfigs/breakPoints';

const ThumbNails = ({ dummy }) => {
  const [flipped, setFlipped] = useState(false);

  useInterval(() => {
    setFlipped(!flipped);
  }, 3000);

  return (
    <Wrap>
      <Thumb1>
        <FlipCard
          flipped={flipped}
          front={
            <img src="https://imgc.nxtv.jp/img/info/eps/00186/ED00186815.png?output-format=jpeg&output-quality=60" />
          }
          back={
            <img src="https://imgc.nxtv.jp/img/info/eps/00205/ED00205736.png?output-format=jpeg&output-quality=60" />
          }
        />
      </Thumb1>
      <Thumb2>
        <FlipCard
          flipped={flipped}
          front={
            <img src="https://imgc.nxtv.jp/img/info/eps/00205/ED00205736.png?output-format=jpeg&output-quality=60" />
          }
          back={
            <img src="https://imgc.nxtv.jp/img/info/eps/00186/ED00186815.png?output-format=jpeg&output-quality=60" />
          }
        />
      </Thumb2>
      <Thumb3>
        <FlipCard
          flipped={flipped}
          front={
            <img src="https://imgc.nxtv.jp/img/info/eps/00209/ED00209186.png?output-format=jpeg&output-quality=60" />
          }
          back={
            <img src="https://imgc.nxtv.jp/img/info/eps/00192/ED00192928.png?output-format=jpeg&output-quality=60" />
          }
        />
      </Thumb3>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Thumb1 = styled.div`
  width: 50%;
`;

const Thumb2 = styled.div`
  width: 50%;
`;

const Thumb3 = styled.div`
  width: 100%;
`;

const Img1A = styled(animated.img)`
  width: 100%;
  display: block;
`;

export default ThumbNails;
