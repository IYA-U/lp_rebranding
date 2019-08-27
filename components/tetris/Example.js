import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

const Example = () => (
  <Wrap>
    <Container>
      <ContainerInner>
        <Row noGutters>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
            <Col sm={2} xl={1} key={num}>
              <ColInner isOdd={num % 2 === 0}>{num}</ColInner>
            </Col>
          ))}
        </Row>
      </ContainerInner>
    </Container>
  </Wrap>
);

const Wrap = styled.div`
  background-color: #888897;
  width: 100%;
`;

const ContainerInner = styled.div`
  width: 100%;
  background-color: green;
`;

const ColInner = styled.div`
  background-color: ${({ isOdd }) => (isOdd ? '#B2E2EC' : '#67C7D4')};
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  &:nth-child(2n) {
    background-color: red;
  }
`;

export default Example;
