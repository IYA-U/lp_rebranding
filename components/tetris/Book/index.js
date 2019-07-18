import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import Book from './Book';
import device from '../../../styleConfigs/breakPoints';

const Cards = ({ title, books }) => (
  <Wrap>
    <Container>
      <Row>
        <Title dangerouslySetInnerHTML={{ __html: title }} />
      </Row>
      <Row>
        {books.books.map((book, index) => (
          <Col
            key={index}
            xs="6"
            md="3">
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
  background-color: ${({ theme }) => theme.colors.bright};
  padding: 90px 0 70px;
  @media ${device.PC} {
    padding: 200px 0 180px;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.bright};
  font-size: 2.8rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  margin: 0 auto;
  text-align: center;
  @media ${device.PC} {
    font-size: 4.4rem;
  }
`;

const BookWrap = styled.div`
  margin: 30px 5px 0;
`;

export default Cards;
