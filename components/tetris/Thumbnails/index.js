import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Thumbnail from './Thumbnail';
import { media } from '../../../styleConfigs/breakPoints';

const Thumbnails = ({ thumbnails, title }) => {
  const isOdd = thumbnails.length % 2 > 0;

  return (
    <Container>
      <Wrap>
        <Row>
          <Title dangerouslySetInnerHTML={{ __html: title }} />
        </Row>
        <Row>
          {thumbnails.map((thumbnail, index) => (
            <Col key={index} sm={12} md={6} lg={isOdd ? 4 : 3}>
              <Thumbnail {...thumbnail} />
            </Col>
          ))}
        </Row>
      </Wrap>
    </Container>
  );
};

const Wrap = styled.div`
  background-color: #fff;
  padding: 90px 10px 70px;
  @media ${media.md} {
    padding: 100px 10px 80px;
  }
  @media ${media.lg} {
    padding: 100px 10px 80px;
    margin: 0 -10px;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colorConfig.colors.dark};
  font-size: 2.8rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  line-height: 1.4;
  margin: 0 auto 10px auto;
  text-align: center;
  @media ${media.lg} {
    font-size: 4.4rem;
    margin: 0 auto 20px auto;
  }
`;

export default Thumbnails;
