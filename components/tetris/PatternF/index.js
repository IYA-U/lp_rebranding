import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import device from '../../../styleConfigs/breakPoints';
import SubPatternWrap from '../common/SubPatternWrap';

import PatternF1 from './PatternF1';
import PatternF3 from './PatternF3';

const PatternF = () => (
  <>
    <SubPatternWrap name="F-1">
      <PatternF1 />
    </SubPatternWrap>
    <SubPatternWrap name="F-3">
      <PatternF3 />
    </SubPatternWrap>
  </>
);

export default PatternF;
