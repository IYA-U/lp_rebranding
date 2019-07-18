import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import device from '../../styleConfigs/breakPoints';
import SubPatternWrap from './common/SubPatternWrap';

const Text = ({ hdline, paragraph }) => (
  <Wrap>
    {hdline && <Hdline dangerouslySetInnerHTML={{ __html: hdline }} />}
    {paragraph && <Paragraph dangerouslySetInnerHTML={{ __html: paragraph }} />}
  </Wrap>
);

const Hdline = styled.h2`
  color: ${({ theme }) => theme.colors.bright};
  font-size: 28px;
  font-weight: bold;
  line-height: 1.4;
  margin: 0 auto;
  text-align: left;

  @media ${device.TAB} {
    font-size: 32px;
    text-align: center;
  }
  @media ${device.PC} {
    font-size: 44px;
  }
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  margin: 40px auto 0 auto;
  text-align: justify;
  @media ${device.TAB} {
    margin: 40px auto 0 auto;
    max-width: 640px;
  }
  @media ${device.PC} {
    margin: 80px auto 0 auto;
    max-width: 640px;
  }
`;

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.7;
  padding: 45px 20px 80px;

  @media ${device.PC} {
    padding: 300px 0 300px;
  }
`;

export default Text;
