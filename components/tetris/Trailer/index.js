import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import device from '../../../styleConfigs/breakPoints';
import SubPatternWrap from '../common/SubPatternWrap';
import Video from './Video';

const Trailer = ({ texts, video }) => {
  if (texts) {
    return (
      <Container>
        <WrapText>
          <TextArea>
            <HdlineText>トレーラー</HdlineText>
            <Text>
              2010年の放送以降、世界中を熱狂の渦に巻き込んだ『ウォーキング・デッド』もいよいよシーズン9！前シーズンから18ヶ月が経過した世界が描かれることも発表されており、新キャラクターや懐かしのキャラクターの登場も楽しみだ。U-NEXTでは過去シーズンが見放題なのはもちろん、シーズン9を日本最速で楽しめるFOXチャンネルのリアルタイム配信もご用意！
            </Text>
          </TextArea>

          <VideoWrapText>
            <Video {...video} />
          </VideoWrapText>
        </WrapText>
      </Container>
    );
  }
  return (
    <Container>
      <Wrap>
        <Video {...video} />
      </Wrap>
    </Container>
  );
};

const Wrap = styled.div`
  padding: 40px 20px;
  @media ${device.PC} {
    padding: 60px 0;
  }
`;

const WrapText = styled.div`
  padding: 60px 20px;
  @media ${device.PC} {
    padding: 60px 0;

    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`;

const VideoWrapText = styled.div`
  margin-top: 20px;
  @media ${device.PC} {
    margin-top: 0;
    width: 50%;
  }
`;

const HdlineText = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  @media ${device.TAB} {
    text-align: left;
    font-size: 45px;
  }
`;

const TextArea = styled.div`
  @media ${device.PC} {
    width: calc(50% - 40px);
  }
`;

const Text = styled.p``;

export default Trailer;
