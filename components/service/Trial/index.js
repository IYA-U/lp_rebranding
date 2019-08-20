import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import device from '../../../styleConfigs/breakPoints';

const TOKUTEN = [
  {
    lead: '130,000本以上の動画<br/>70誌以上の雑誌が',
    main: '見放題<br/>読み放題',
    numberText: '31日間<span>0</span>円',
  },
  {
    lead: '最新作の<br/>レンタルに使える',
    main: 'ポイント<br/>プレゼント',
    numberText: '<span>600</span>円分',
  },
];

const Trial = () => (
  <Wrap>
    <Title>
      無料トライアルの
      <Br />
      <span>2つの特典</span>
    </Title>

    <TokurenWrap>
      {TOKUTEN.map((data, index) => (
        <CardWrap key={index}>
          <Card {...data}></Card>
        </CardWrap>
      ))}
      <TextExe>
        U-NEXTがお届けするサービスを、31⽇間ゆっくりとお試しください。
      </TextExe>
    </TokurenWrap>
  </Wrap>
);

const Wrap = styled.div`
  @media ${device.PC} {
    max-width: 800px;
    margin: 0 auto;
  }
`;

const TokurenWrap = styled.ul`
  background-color: rgba(0, 0, 0, 0.04);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 10px;
  @media ${device.PC} {
    padding: 0 20px;
    background-color: transparent;
  }
`;

const CardWrap = styled.div`
  width: calc(50% - 5px);
  @media ${device.PC} {
    width: calc(50% - 20px);
  }
`;

const TextExe = styled.p`
  color: #505050;
  font-size: 14px;
  line-height: 1.5;
  padding: 20px 20px 0;
  @media ${device.PC} {
    margin-top: 20px;
    font-size: 24px;
    text-align: center;
  }
`;

const Title = styled.h2`
  color: #505050;
  font-size: 32px;
  line-height: 1.4;
  padding: 45px 30px;
  span {
    color: ${({ theme }) => theme.dark};
  }
  @media ${device.TAB} {
    font-size: 36px;
    display: block;
    text-align: center;
    padding: 120px 0;
  }
`;

const Br = styled.br`
  @media ${device.TAB} {
    display: none;
  }
`;

export default Trial;
