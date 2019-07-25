import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import TrackVisibility from 'react-on-screen';

import KeyvisualLayout from '../components/keyvisual/Common/Layout';
import AnimatedKeyvisual from '../components/keyvisual/Animated';
import withLayout, { Config } from '../components/Layout/withLayout';
import Spec from '../components/service/Spec--animated';

const test = () => (
  <div>
    <KeyvisualLayout>
      <AnimatedKeyvisual />
    </KeyvisualLayout>
    <TrackVisibility
      offset={300}
      once>
      <Spec />
    </TrackVisibility>
  </div>
);

export default withLayout(test);
