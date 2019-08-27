import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Book from './Book';
import { media } from '../../../styleConfigs/breakPoints';

const Books = ({ hdline, books }) => (
  <Wrap>
    <Container>
      <Row>
        <Title dangerouslySetInnerHTML={{ __html: hdline }} />
      </Row>
      <Row>
        {books.books.map((book, index) => (
          <Col key={index} sm={6} md={3}>
            <BookWrap>
              <Book {...book} />
            </BookWrap>
          </Col>
        ))}
      </Row>
    </Container>
  </Wrap>
);

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.colorConfig.colors.bright};
  padding: 90px 8px;
  @media ${media.lg} {
    padding: 180px 0;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colorConfig.colors.dark};
  font-size: 2.8rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  margin: 0 auto;
  text-align: center;
  @media ${media.lg} {
    font-size: 4.4rem;
  }
`;

const BookWrap = styled.div`
  margin: 30px 5px 0;
  @media ${media.lg} {
    margin: 60px 10px 0;
  }
`;

export default Books;
