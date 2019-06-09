import React, { useState } from 'react';
import styled from 'styled-components';
import { useTrail, animated } from 'react-spring';
import Card from './Card';

const Spec = ({ isVisible }) => {
  const cards = [
    {
      num: '01',
      title: '90,000本以上が見放題！<br/>最新レンタル作品も充実。',
      paragraph:
        '見放題のラインアップ数は断トツのNo.1。だから観たい作品をたっぷり、お得に楽しめます。最新映画もぞくぞく配信されるので、観たい気分を我慢する必要はありません。',
      backGroundColor: '#00D0B0',
    },
    {
      num: '02',
      title: '動画も書籍も<br/>U-NEXTひとつでOK',
      paragraph:
        '見放題のラインアップ数は断トツのNo.1。だから観たい作品をたっぷり、お得に楽しめます。最新映画もぞくぞく配信されるので、観たい気分を我慢する必要はありません。',
      backGroundColor: '#15BEA5',
    },
    {
      num: '03',
      title: '毎月もらえる<br/>1200ポイントでお得に',
      paragraph:
        '見放題のラインアップ数は断トツのNo.1。だから観たい作品をたっぷり、お得に楽しめます。最新映画もぞくぞく配信されるので、観たい気分を我慢する必要はありません。',
      backGroundColor: '#00A78D',
    },
    {
      num: '04',
      title: '解約はいつでも<br/>簡単',
      paragraph:
        '見放題のラインアップ数は断トツのNo.1。だから観たい作品をたっぷり、お得に楽しめます。最新映画もぞくぞく配信されるので、観たい気分を我慢する必要はありません。',
      backGroundColor: '#0F9480',
    },
  ];
  const cardsAnimation = useTrail(4, {
    transform: isVisible ? 'translateY(0px)' : 'translateY(-200px)',
    from: { transform: 'translateY(-200px)' },
    config: { mass: 5, tension: 1000, friction: 100 },
  });

  return (
    <Wrap>
      {cardsAnimation.map((animation, index) => (
        <CardWrap key={index}>
          <CardInner style={animation}>
            <Card {...cards[index]} />
          </CardInner>
        </CardWrap>
      ))}
    </Wrap>
  );
};

const Wrap = styled(animated.div)`
  height: 500px;
  width: 100%;
`;

const CardWrap = styled(animated.div)`
  overflow: hidden;
  height: 150px;
`;

const CardInner = styled(animated.div)``;

export default Spec;
