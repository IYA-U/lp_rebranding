import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import KeyvisualLayout from '../components/keyvisual/Common/Layout';

import AnimatedKeyvisual from '../components/keyvisual/Animated';
import withLayout, { Config } from '../components/Layout/withLayout';

const test = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <>
      <KeyvisualLayout>
        <AnimatedKeyvisual />
      </KeyvisualLayout>
    </>
  );
};

const TestBlock = styled(animated.div)`
  width: 200px;
  height: 200px;
  background-color: skyblue;
`;

export default withLayout(test);
