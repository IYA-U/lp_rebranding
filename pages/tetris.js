import React from 'react';
import styled from 'styled-components';
import PatternA from '../components/tetris/PatternA';
import PatternB from '../components/tetris/PatternB/index';
import PatternC from '../components/tetris/PatternC/index';
import PatternD from '../components/tetris/PatternD/index';
import PatternE from '../components/tetris/PatternE';
import PatternF from '../components/tetris/PatternF/index';
import Example from '../components/tetris/Example';

const Tetris = () => (
  <>
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
  </>
);

const PatternWrap = styled.div`
  position: relative;
  padding-top: 30px;
  &:after {
    height: 30px;
    display: block;
    font-weight: bold;
    text-align: center;
    background-color: #6495ed;
    font-size: 20px;
    padding: 4px;
    line-height: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: white;
    content: ${({ name }) => `"${name}"`};
  }
`;

export default Tetris;
