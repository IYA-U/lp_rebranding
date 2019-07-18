import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import device from '../../styleConfigs/breakPoints';
import SubPatternWrap from './common/SubPatternWrap';

const Text = ({ hdline, paragraph }) => (
  <Container>
    <Row>
      <Col xs="12">
        <Wrap>
          {hdline && <Hdline dangerouslySetInnerHTML={{ __html: hdline }} />}
          {paragraph && (
            <Paragraph dangerouslySetInnerHTML={{ __html: paragraph }} />
          )}
        </Wrap>
      </Col>
    </Row>
  </Container>
);

const Hdline = styled.h2`
  color: ${({ theme }) => theme.colors.bright};
  font-size: 28px;
  font-weight: bold;
  line-height: 1.4;
  margin: 0 auto;
  text-align: left;

  @media ${device.TAB} {
    font-size: 44px;
    text-align: center;
  }
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  margin: 40px auto 0 auto;
  text-align: justify;
  @media ${device.PC} {
    margin: 80px auto 0 auto;
    max-width: 640px;
  }
`;

const Wrap = styled.div`
  background-color: rgba(${({ theme }) => theme.colors.black}, 0.8);
  margin: 45px 0 80px;
  padding: 0 20px;
  @media ${device.TAB} {
    margin: 45px 0 80px;
  }
  @media ${device.PC} {
    margin: 300px 0 300px;
  }
`;

const BrPc = styled.br`
  display: none;
  @media ${device.TAB} {
    display: block;
  }
`;

const BrSp = styled.br`
  display: block;
  @media ${device.TAB} {
    display: none;
  }
`;
export default Text;
