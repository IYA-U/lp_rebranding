import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import Card from './Card';
import device from '../../../styleConfigs/breakPoints';
import SubPatternWrap from '../common/SubPatternWrap';

const Cards = ({ cards }) => {
  const isOdd = cards.length % 2 > 0;

  return (
    <Container>
      <Row>
        {cards.map((card) => (
          <Col
            xs="12"
            md="6"
            lg={isOdd ? 4 : 3}>
            <Card {...card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
