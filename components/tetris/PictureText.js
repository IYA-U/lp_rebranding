import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { media } from '../../styleConfigs/breakPoints';

const PictureText = ({ paragraph, subhead, picture }) => (
  <Wrap>
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <ImgWrap>
            <img src={picture} alt="" />
          </ImgWrap>
        </Col>
        <Col sm={12} md={6}>
          <Subhead>{subhead}</Subhead>
          <Paragraph>{paragraph}</Paragraph>
        </Col>
      </Row>
    </Container>
  </Wrap>
);

const ImgWrap = styled.div`
  @media ${media.md} {
    padding-right: 20px;
  }
  @media ${media.lg} {
    padding-right: 40px;
  }
`;

const Subhead = styled.h3`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.4;
  margin-top: 20px;
  text-align: left;
  @media ${media.md} {
    margin-top: 0px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  margin-top: 20px;
  text-align: justify;
  @media ${media.lg} {
    margin: 40px auto;
  }
`;

const Wrap = styled.div`
  margin: 60px 0;
  padding: 0 20px;
  @media ${media.md} {
    margin: 90px 0;
  }
  @media ${media.lg} {
    margin: 120px 0;
  }
`;

export default PictureText;
