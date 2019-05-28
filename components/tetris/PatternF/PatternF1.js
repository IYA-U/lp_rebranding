import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import device from '../../../styleConfigs/breakPoints';
import Wrapper from './Wrapper';
import Card from './Card';

const PatternF1 = () => (
  <Wrapper>
    <>
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <Col
          xs="12"
          md="4"
          key={num}>
          <Card />
        </Col>
      ))}
    </>
  </Wrapper>
);

export default PatternF1;
