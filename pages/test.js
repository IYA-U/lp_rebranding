import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import TrackVisibility from 'react-on-screen';

import KeyvisualLayout from '../components/keyvisual/Common/Layout';
import AnimatedKeyvisual from '../components/keyvisual/Animated';
import withLayout, { Config } from '../components/Layout/withLayout';
import Spec from '../components/service/Spec--animated';

const test = () => (
  <>
    <Block>0px</Block>
    <Block>100px</Block>
    <Block>200px</Block>
    <Block>300px</Block>
    <Block>400px</Block>
    <Block>500px</Block>
    <Block>600px</Block>
    <Block>700px</Block>

    {/* <KeyvisualLayout>
      <AnimatedKeyvisual />
    </KeyvisualLayout>
    <TrackVisibility
      offset={300}
      once>
      <Spec />
    </TrackVisibility> */}
  </>
);

const Block = styled.div`
  background-color: #faa0cc;
  color: white;
  font-size: 30px;
  height: 100px;
  width: 100%;
  &:nth-of-type(2n) {
    background-color: #e00e87;
  }
`;

export default withLayout(test);
