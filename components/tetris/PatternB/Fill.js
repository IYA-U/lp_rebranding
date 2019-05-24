import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import device from '../../../styleConfigs/breakPoints';
import SubPatternWrap from '../common/SubPatternWrap';

const Fill = () => (
  <>
    <SubPatternWrap name="B Right">
      <Wrap>
        <ImgArea />
        <TextArea>
          <H2>全世界を虜にしたサバイバル•ヒューマンドラマ</H2>
          <H1>新たな展開が待ち受ける、 新シーズン開幕！</H1>
          <Text>
            2010年の放送以降、世界中を熱狂の渦に巻き込んだ『ウォーキング・デッド』もいよいよシーズン9！前シーズンから18ヶ月が経過した世界が描かれることも発表されており、新キャラクターや懐かしのキャラクターの登場も楽しみだ。U-NEXTでは過去シーズンが見放題なのはもちろん、シーズン9を日本最速で楽しめるFOXチャンネルのリアルタイム配信もご用意！
          </Text>
        </TextArea>
      </Wrap>
    </SubPatternWrap>
    <SubPatternWrap name="B Right6:4">
      <Wrap>
        <ImgArea is64 />
        <TextArea is64>
          <H2>全世界を虜にしたサバイバル•ヒューマンドラマ</H2>
          <H1>新たな展開が待ち受ける、 新シーズン開幕！</H1>
          <Text>
            2010年の放送以降、世界中を熱狂の渦に巻き込んだ『ウォーキング・デッド』もいよいよシーズン9！前シーズンから18ヶ月が経過した世界が描かれることも発表されており、新キャラクターや懐かしのキャラクターの登場も楽しみだ。U-NEXTでは過去シーズンが見放題なのはもちろん、シーズン9を日本最速で楽しめるFOXチャンネルのリアルタイム配信もご用意！
          </Text>
        </TextArea>
      </Wrap>
    </SubPatternWrap>
    <SubPatternWrap name="B Left">
      <Wrap isLeft>
        <ImgArea is64 />
        <TextArea is64>
          <H2>全世界を虜にしたサバイバル•ヒューマンドラマ</H2>
          <H1>新たな展開が待ち受ける、 新シーズン開幕！</H1>
          <Text>
            2010年の放送以降、世界中を熱狂の渦に巻き込んだ『ウォーキング・デッド』もいよいよシーズン9！前シーズンから18ヶ月が経過した世界が描かれることも発表されており、新キャラクターや懐かしのキャラクターの登場も楽しみだ。U-NEXTでは過去シーズンが見放題なのはもちろん、シーズン9を日本最速で楽しめるFOXチャンネルのリアルタイム配信もご用意！
          </Text>
        </TextArea>
      </Wrap>
    </SubPatternWrap>
    <SubPatternWrap name="B Left 6:4">
      <Wrap isLeft>
        <ImgArea />
        <TextArea>
          <H2>全世界を虜にしたサバイバル•ヒューマンドラマ</H2>
          <H1>新たな展開が待ち受ける、 新シーズン開幕！</H1>
          <Text>
            2010年の放送以降、世界中を熱狂の渦に巻き込んだ『ウォーキング・デッド』もいよいよシーズン9！前シーズンから18ヶ月が経過した世界が描かれることも発表されており、新キャラクターや懐かしのキャラクターの登場も楽しみだ。U-NEXTでは過去シーズンが見放題なのはもちろん、シーズン9を日本最速で楽しめるFOXチャンネルのリアルタイム配信もご用意！
          </Text>
        </TextArea>
      </Wrap>
    </SubPatternWrap>
  </>
);

const Wrap = styled.div`
  @media ${device.TAB} {
    display: flex;
    align-items: stretch;
    flex-direction: ${({ isLeft }) => (isLeft ? 'row-reverse' : 'row')};
  }
`;

const ImgArea = styled.div`
  background-image: url('/static/img/twd.jpg');
  height: 265px;
  background-size: cover;
  background-position: center;
  @media ${device.TAB} {
    width: ${({ is64 }) => (is64 ? '60%' : '50%')};
    height: auto;
  }
`;

const TextArea = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 30px 15px 60px;
  @media ${device.TAB} {
    width: ${({ is64 }) => (is64 ? '40%' : '50%')};
    padding: 85px 40px;
  }
  @media ${device.TAB} {
    padding: 160px 80px;
  }
`;

const H1 = styled.div`
  font-size: 30px;
  text-align: left;
  line-height: 1.4;
  font-weight: bold;
  margin-top: 16px;
  @media ${device.TAB} {
    font-size: 36px;
  }
  @media ${device.PC} {
    font-size: 44px;
    margin-top: 36px;
  }
`;

const H2 = styled.div`
  font-size: 20px;
  text-align: left;
  line-height: 1.4;
  font-weight: bold;
  @media ${device.TAB} {
    font-size: 26px;
  }
`;

const Text = styled.p`
  margin-top: 16px;
  @media ${device.PC} {
    margin-top: 36px;
  }
`;

export default Fill;
