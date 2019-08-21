import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import device from '../../styleConfigs/breakPoints';

const HorizontalCard = ({
  hdline, paragraph, isLeft, is64,
}) => (
  <Container>
    <Wrap isLeft={isLeft}>
      <ImgArea is64={is64} />
      <TextArea is64={is64}>
        <H1>{hdline}</H1>
        <Text dangerouslySetInnerHTML={{ __html: paragraph }} />
      </TextArea>
    </Wrap>
  </Container>
);

const Wrap = styled.div`
  margin-top: 40px;
  padding: 0 20px;
  @media ${device.TAB} {
    display: flex;
    align-items: stretch;
    flex-direction: ${({ isLeft }) => (isLeft ? 'row-reverse' : 'row')};
  }
  @media ${device.PC} {
    padding: 0;
  }
`;

const ImgArea = styled.div`
  background-image: url('/static/img/twd.jpg');
  background-position: center;
  background-size: cover;
  height: 265px;
  @media ${device.TAB} {
    width: ${({ is64 }) => (is64 ? '60%' : '50%')};
    height: auto;
  }
`;

const TextArea = styled.div`
  background-color: ${({ theme }) => theme.colorConfig.colors.bright};
  color: white;
  padding: 30px 15px 60px;
  text-align: justify;
  @media ${device.TAB} {
    width: ${({ is64 }) => (is64 ? '40%' : '50%')};
    padding: 80px 40px;
  }
`;

const H1 = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.4;
  text-align: left;

  @media ${device.PC} {
    font-size: 34px;
    margin-top: 36px;
  }
`;

const Text = styled.p`
  margin-top: 16px;
  text-align: justify;
  @media ${device.PC} {
    margin-top: 36px;
  }
`;

export default HorizontalCard;
