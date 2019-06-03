import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from './Card';

const Cards = ({ cards }) => {
  const isOdd = cards.length % 2 > 0;

  return (
    <Container>
      <Row>
        {cards.map((card, index) => (
          <Col
            key={index}
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
