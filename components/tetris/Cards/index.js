import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import Card from './Card';
import device from '../../../styleConfigs/breakPoints';

const Cards = ({ cards }) => {
  const isOdd = cards.length % 2 > 0;

  return (
    <CardsArea>
      <Container>
        <Wrap>
          <Row>
            <Title>個性豊かな主人公チーム</Title>
          </Row>
          <Row>
            <Lead>
              チーム全員が美形キャラクターである点について、作者荒木は「SMAPやジャニーズなどを意識していたのだと思う」と回想して語っている。
            </Lead>
          </Row>
          <Row>
            {cards.map((card, index) => (
              <Col
                key={index}
                xs="12"
                md="6"
                lg={isOdd ? 4 : 3}>
                <Card {...card} />
              </Col>
            ))}
          </Row>
        </Wrap>
      </Container>
    </CardsArea>
  );
};

const CardsArea = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
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

const Lead = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.8;
  margin: 20px auto 0 auto;
  text-align: justify;
  @media ${device.PC} {
    font-weight: 400;
    max-width: 640px;
    margin: 60px auto 0 auto;
  }
`;

const Wrap = styled.div`
  padding: 0 20px;
  @media ${device.TAB} {
    padding: 0 10px;
  }
  @media ${device.PC} {
    padding: 0;
    margin: 0 -10px;
  }
`;

export default Cards;
