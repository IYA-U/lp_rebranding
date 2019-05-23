import React from 'react';
import styled from 'styled-components';
import PatternA from '../components/tetris/PatternA';
import PatternB from '../components/tetris/PatternB';
import PatternC from '../components/tetris/PatternC';
import PatternD from '../components/tetris/PatternD';
import PatternE from '../components/tetris/PatternE';
import PatternF from '../components/tetris/PatternF';

import Example from '../components/tetris/Example';

const Tetris = () => {
  console.log('wow');
  return (
    <Wrap>
      <PatternWrap name="グリッドの見本">
        <Example />
      </PatternWrap>
      <PatternWrap name="Pattern A">
        <PatternA />
      </PatternWrap>
      <PatternWrap name="Pattern B">
        <PatternB />
      </PatternWrap>
      <PatternWrap name="Pattern C">
        <PatternC />
      </PatternWrap>
      <PatternWrap name="Pattern D">
        <PatternD />
      </PatternWrap>
      <PatternWrap name="Pattern E">
        <PatternE />
      </PatternWrap>
      <PatternWrap name="Pattern F">
        <PatternF />
      </PatternWrap>
    </Wrap>
  );
};

const Wrap = styled.div``;

const PatternWrap = styled.div`
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &:after {
    display: block;
    font-size: 12px;
    padding: 4px;
    line-height: 1;
    border-radius: 0px 0px 3px 0px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ccc;
    content: ${({ name }) => `"${name}"`};
  }
`;

export default Tetris;
