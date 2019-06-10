import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, UncontrolledCollapse } from 'reactstrap';
import { FaqBody, Title, FaqWrap, FaqList, DefList, DefTerm, DefDes, Arrow } from './Layout';

const Faq = () => {
  console.log('WIP');
  return (
    <>
      <Container>
        <Row>
          <Col xs="12">
            <FaqBody>
              <Title>よくある質問</Title>
              <FaqWrap>
                <FaqList>
                  <DefList>
                    <DefTerm id="toggler01">
                      U-NEXTとは？<Arrow></Arrow>
                    </DefTerm>
                    <UncontrolledCollapse toggler="#toggler01">
                      <DefDes>
                        株式会社USENで、2007年に始めた動画配信サービスです。現在は映画/ ドラマ/ アニメなどの動画だけではなく、マンガ/ ラノベ/ 書籍/ 雑誌など幅広いコンテンツを配信中。ひとつのサービスで観るも読むも、お楽しみいただけます。       
                      </DefDes>
                    </UncontrolledCollapse>
                  </DefList>
                </FaqList>
                <FaqList>
                  <DefList>
                    <DefTerm id="toggler02">
                      ⾒放題作品/ レンタル作品の本数は？<Arrow></Arrow>
                    </DefTerm>
                    <UncontrolledCollapse toggler="#toggler02">
                      <DefDes>説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明</DefDes>
                    </UncontrolledCollapse>
                  </DefList>
                </FaqList>
                <FaqList>
                  <DefList>
                    <DefTerm id="toggler03">
                      なぜ⾒放題作品とレンタル作品があるの？<Arrow></Arrow>
                    </DefTerm>
                    <UncontrolledCollapse toggler="#toggler03">
                      <DefDes>説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明</DefDes>
                    </UncontrolledCollapse>
                  </DefList>
                </FaqList>
                <FaqList>
                  <DefList>
                    <DefTerm id="toggler04">
                      無料トライアルは何が無料？<Arrow></Arrow>
                    </DefTerm>
                    <UncontrolledCollapse toggler="#toggler04">
                      <DefDes>説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明</DefDes>
                    </UncontrolledCollapse>
                  </DefList>
                </FaqList>
                <FaqList>
                  <DefList>
                    <DefTerm id="toggler05">
                      最⼤40％※ポイントバックとは？<Arrow></Arrow>
                    </DefTerm>
                    <UncontrolledCollapse toggler="#toggler05">
                          <DefDes>説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明</DefDes>
                    </UncontrolledCollapse>
                  </DefList>
                </FaqList>
                <FaqList>
                  <DefList>
                    <DefTerm id="toggler06">
                      フルHD画質/ 4K画質とは？<Arrow></Arrow>
                    </DefTerm>
                    <UncontrolledCollapse toggler="#toggler06">
                      <DefDes>説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明</DefDes>
                    </UncontrolledCollapse>
                  </DefList>
                </FaqList>
                <FaqList>
                  <DefList>
                    <DefTerm id="toggler07">
                      いつでも解約できますか？<Arrow></Arrow>
                    </DefTerm>
                    <UncontrolledCollapse toggler="#toggler07">
                      <DefDes>説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明</DefDes>
                    </UncontrolledCollapse>
                  </DefList>
                </FaqList>
              </FaqWrap>
            </FaqBody>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
