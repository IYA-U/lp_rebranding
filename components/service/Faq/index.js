import React from 'react';
import styled from 'styled-components';
import {
  Container, Row, Col, UncontrolledCollapse,
} from 'reactstrap';
import {
  FaqBody,
  Title,
  FaqWrap,
  FaqList,
  DefList,
  DefTerm,
  DefDes,
  Arrow,
} from './Layout';

const Faq = () => {
  console.log('！！FAQの！！WIP！！だよ！！');

  const QA = [
    {
      no: '01',
      term: 'U-NEXTとは？',
      description:
        '株式会社USENで、2007年に始めた動画配信サービスです。現在は映画/ ドラマ/ アニメなどの動画だけではなく、マンガ/ ラノベ/ 書籍/ 雑誌など幅広いコンテンツを配信中。ひとつのサービスで観るも読むも、お楽しみいただけます。',
    },
    {
      no: '02',
      term: '⾒放題作品 / レンタル作品の本数は？',
      description:
        '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    },
    {
      no: '03',
      term: 'なぜ⾒放題作品とレンタル作品があるの？',
      description:
        '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    },
    {
      no: '04',
      term: '無料トライアルは何が無料？',
      description:
        '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    },
    {
      no: '05',
      term: '最⼤40％※ポイントバックとは？',
      description:
        '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    },
    {
      no: '06',
      term: 'フルHD画質/ 4K画質とは？',
      description:
        '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    },
    {
      no: '07',
      term: 'いつでも解約できますか？',
      description:
        '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    },
  ];

  return (
    <>
      <Container>
        <Row>
          <Col xs="12">
            <FaqBody>
              <Title>よくある質問</Title>
              <FaqWrap>
                {QA.map((qa) => (
                  <FaqList>
                    <DefList>
                      <DefTerm id={`toggler${qa.no}`}>
                        {qa.term}
                        <Arrow></Arrow>
                      </DefTerm>
                      <UncontrolledCollapse toggler={`#toggler${qa.no}`}>
                        <DefDes>{qa.description}</DefDes>
                      </UncontrolledCollapse>
                    </DefList>
                  </FaqList>
                ))}
              </FaqWrap>
            </FaqBody>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
