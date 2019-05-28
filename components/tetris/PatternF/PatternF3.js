import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import device from '../../../styleConfigs/breakPoints';
import Wrapper from './Wrapper';
import SideCard from './SideCard';

const PatternF3 = () => (
  <Wrapper>
    <SideCard />
    <SideCard isLeft />
    <SideCard is64 />
    <SideCard
      isLeft
      is64 />
  </Wrapper>
);

export default PatternF3;
