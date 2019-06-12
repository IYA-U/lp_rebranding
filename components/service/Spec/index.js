import React from 'react';
import styled from 'styled-components';
import {
  Container, Row, Col, UncontrolledCollapse,
} from 'reactstrap';
import {
  SpecBody,
  Title,
  SpecWrap,
  SpecList,
  DefList,
  DefTerm,
  DefDes,
  DefaultWrap,
  MoreWrap,
  TogglerWrap,
  Arrow,
} from './Layout';

const Spec = () => {
  console.log('WIP');

  const List = [
    {
      spec: '無料トライアル',
      detail: '31日間',
      underline: null,
    },
    {
      spec: '無料トライアル後の月額料金',
      detail: '1,990円（税抜）',
      underline: null,
    },
    {
      spec: '毎月もらえるU-NEXTポイント',
      detail: '1,200円',
      underline: null,
    },
    {
      spec: '同時視聴アカウント数',
      detail: '4',
      underline: null,
    },
    {
      spec: 'アカウントごとの機能制限設定',
      detail: <img src="/static/img/check@2x.png" />,
      underline: 'underline',
    },
    {
      spec: 'ポイントバック（ポイント還元）',
      detail: '最大40%',
      underline: 'underline',
    },
    {
      spec: 'フルHD画質 / 4K画質',
      detail: <img src="/static/img/check@2x.png" />,
      underline: 'underline',
    },
    {
      spec: '高音質（DOLBY DIGITAL PLUS）',
      detail: <img src="/static/img/check@2x.png" />,
      underline: null,
    },
    {
      spec: 'テレビ / スマホ / PCなどに対応',
      detail: <img src="/static/img/check@2x.png" />,
      underline: null,
    },
    {
      spec: 'ダウンロード機能',
      detail: <img src="/static/img/check@2x.png" />,
      underline: null,
    },
    {
      spec: '動画も書籍も楽しめる',
      detail: <img src="/static/img/check@2x.png" />,
      underline: null,
    },
    {
      spec: '見放題作品',
      detail: '90,000本以上',
      underline: null,
    },
    {
      spec: '雑誌読み放題',
      detail: '70誌以上',
      underline: null,
    },
    {
      spec: 'プロが選ぶおすすめ特集',
      detail: '5,000以上',
      underline: null,
    },
    {
      spec: 'いつでも簡単に解約できる',
      detail: <img src="/static/img/check@2x.png" />,
      underline: null,
    },
  ];
  return (
    <>
      <Container>
        <Row>
          <Col xs="12">
            <SpecBody>
              <Title>サービススペックと利用料金</Title>
              <DefaultWrap>
                <SpecWrap>
                  {List.map((list) => (
                    <SpecList>
                      <DefList>
                        <DefTerm className={`${list.underline}`}>
                          <p>{list.spec}</p>
                        </DefTerm>
                        <DefDes className={`${list.underline}`}>
                          <p>{list.detail}</p>
                        </DefDes>
                      </DefList>
                    </SpecList>
                  ))}
                </SpecWrap>
              </DefaultWrap>
              {/* スマホのみ表示 */}
              <TogglerWrap>
                <p id="toggler">
                  もっと見る<Arrow></Arrow>
                </p>
                <UncontrolledCollapse toggler="#toggler">
                  <MoreWrap>
                    <SpecWrap>
                      {List.map((list) => (
                        <SpecList>
                          <DefList>
                            <DefTerm className={`${list.underline}`}>
                              <p>{list.spec}</p>
                            </DefTerm>
                            <DefDes className={`${list.underline}`}>
                              <p>{list.detail}</p>
                            </DefDes>
                          </DefList>
                        </SpecList>
                      ))}
                    </SpecWrap>
                  </MoreWrap>
                </UncontrolledCollapse>
              </TogglerWrap>
              {/* スマホのみ表示 */}
            </SpecBody>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Spec;
