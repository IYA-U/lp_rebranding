import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import device from '../../styleConfigs/breakPoints';
import SubPatternWrap from './common/SubPatternWrap';

const Text = ({ lead, hdline, paragraph }) => (
  <Container>
    <Row>
      <Col xs="12">
        <Wrap>
          {lead && <Lead>{lead}</Lead>}
          {hdline && <Hdline>{hdline}</Hdline>}
          {paragraph && (
            <Paragraph dangerouslySetInnerHTML={{ __html: paragraph }} />
          )}
        </Wrap>
      </Col>
    </Row>
  </Container>
);

const Hdline = styled.h2`
  font-size: 32px;
  font-weight: bold;
  line-height: 1.4;
  margin: 20px auto;
  text-align: center;

  @media ${device.TAB} {
    margin-top: 20px;
    font-size: 45px;
  }
  @media ${device.PC} {
    font-size: 47px;
    margin: 40px auto;
  }
`;

const Lead = styled.h3`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.4;
  margin: 20px auto;
  text-align: center;
  @media ${device.PC} {
    margin: 40px auto;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  margin: 20px auto;
  text-align: justify;
  @media ${device.PC} {
    margin: 40px auto;
  }
`;

const Wrap = styled.div`
  margin: 60px 0 20px;
  padding: 0 20px;
  @media ${device.TAB} {
    margin: 90px 0 20px;
  }
  @media ${device.PC} {
    margin: 120px 0 40px;
  }
`;

export default Text;
