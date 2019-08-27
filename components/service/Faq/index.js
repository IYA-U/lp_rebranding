import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { FaqBody, Title, FaqWrap } from './Layout';
import Qa from './Qa';
import constants from './constants';

const Faq = () => (
  <Container>
    <Row>
      <Col sm={12}>
        <FaqBody>
          <Title>よくある質問</Title>
          <FaqWrap>
            {constants.map((qa, index) => (
              <Qa data={qa} key={index} />
            ))}
          </FaqWrap>
        </FaqBody>
      </Col>
    </Row>
  </Container>
);

export default Faq;
