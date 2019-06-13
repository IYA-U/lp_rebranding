import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { FaqBody, Title, FaqWrap } from './Layout';
import Qa from './Qa';
import constants from './constants';

const Faq = () => {
  console.log('！！FAQの！！WIP！！だよ！！');

  return (
    <>
      <Container>
        <Row>
          <Col xs="12">
            <FaqBody>
              <Title>よくある質問</Title>
              <FaqWrap>
                {constants.map((qa) => (
                  <Qa data={qa} />
                ))}
              </FaqWrap>
            </FaqBody>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
