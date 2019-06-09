import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import FlipCard from '../../common/FlipCard--infinite';
import device from '../../../styleConfigs/breakPoints';

const ThumbNails = ({ dummy }) => {
  const createThumbPath = (sid) => `https://imgc.nxtv.jp/img/info/tit/000${sid.slice(
    5,
    7,
  )}/${sid}.png?output-quality=80&output-format=jpg`;
  return (
    <Wrap>
      <Thumb1>
        <FlipCard
          contents={[
            'SID0031848',
            'SID0035180',
            'SID0035672',
            'SID0033606',
            'SID0033704',
            'SID0034200',
            'SID0032019',
          ].map((sid) => (
            <img src={createThumbPath(sid)} />
          ))}
        />
      </Thumb1>
      <Thumb2>
        <FlipCard
          contents={[
            'SID0031398',
            'SID0031774',

            'SID0030730',
            'SID0032242',
            'SID0034213',
            'SID0033217',
            'SID0027813',
          ].map((sid) => (
            <img src={createThumbPath(sid)} />
          ))}
        />
      </Thumb2>
      <Thumb3>
        <FlipCard
          contents={[
            'SID0035811',
            'SID0029948',

            'SID0034399',
            'SID0028167',
            'SID0032901',
            'SID0020518',
          ].map((sid) => (
            <img src={createThumbPath(sid)} />
          ))}
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
