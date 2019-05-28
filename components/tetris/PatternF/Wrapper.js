import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import device from '../../../styleConfigs/breakPoints';

const Wrapper = ({ children }) => (
  <Wrap>
    <Container>
      <Row>
        <Col xs="12">
          <Lead>過去作をもっと楽しむために！</Lead>
          <Hdline>スターウォーズ過去作を一気観しよう！</Hdline>
        </Col>
      </Row>
      <Row>{children}</Row>
    </Container>
  </Wrap>
);

const Wrap = styled.div`
  padding: 60px 15px;
  @media ${device.TAB} {
    padding: 85px 40px;
  }
  @media ${device.PC} {
    padding: 160px 0;
  }
`;

const Lead = styled.h2`
  font-size: 20px;
  text-align: center;
  @media ${device.TAB} {
    font-size: 26px;
  }
`;

const Hdline = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-top: 16px;
  @media ${device.TAB} {
    font-size: 44px;
    margin-top: 20px;
  }
  @media ${device.PC} {
    margin-top: 40px;
  }
`;

export default Wrapper;
