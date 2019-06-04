import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import Card from './Card';
import device from '../../../styleConfigs/breakPoints';

const Cards = ({ cards }) => {
  const isOdd = cards.length % 2 > 0;

  return (
    <Container>
      <Wrap>
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
      </Wrap>
    </Container>
  );
};

const Wrap = styled.div`
  padding: 0 20px;
  @media ${device.TAB} {
    padding: 0 10px;
  }
  @media ${device.PC} {
    padding: 0;
    margin: 0 -10px;
  }
`;

export default Cards;
