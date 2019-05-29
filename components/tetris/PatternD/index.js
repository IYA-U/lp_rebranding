import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import device from '../../../styleConfigs/breakPoints';
import SubPatternWrap from '../common/SubPatternWrap';
import Video from './Video';

const PatternD = () => (
  <>
    <SubPatternWrap name="D-1">
      <Container>
        <Row>
          <Col
            xs="12"
            lg={{ size: '10', offset: 1 }}>
            <Wrap>
              <Hdline>TRAILER</Hdline>
              <VideoWrap>
                <Video />
              </VideoWrap>
              <Text>
                2010年の放送以降、世界中を熱狂の渦に巻き込んだ『ウォーキング・デッド』もいよいよシーズン9！前シーズンから18ヶ月が経過した世界が描かれることも発表されており、新キャラクターや懐かしのキャラクターの登場も楽しみだ。U-NEXTでは過去シーズンが見放題なのはもちろん、シーズン9を日本最速で楽しめるFOXチャンネルのリアルタイム配信もご用意！
              </Text>
            </Wrap>
          </Col>
        </Row>
      </Container>
    </SubPatternWrap>
    <SubPatternWrap name="D-2">
      <Container>
        <Wrap className="clearfix">
          <HdlineD2>TRAILER</HdlineD2>
          <VideoWrapD2>
            <Video />
          </VideoWrapD2>
          <TextD2>
            2010年の放送以降、世界中を熱狂の渦に巻き込んだ『ウォーキング・デッド』もいよいよシーズン9！前シーズンから18ヶ月が経過した世界が描かれることも発表されており、新キャラクターや懐かしのキャラクターの登場も楽しみだ。U-NEXTでは過去シーズンが見放題なのはもちろん、シーズン9を日本最速で楽しめるFOXチャンネルのリアルタイム配信もご用意！！
          </TextD2>
        </Wrap>
      </Container>
    </SubPatternWrap>
  </>
);

const Wrap = styled.div`
  padding: 60px 15px;
  @media ${device.TAB} {
    padding: 85px 40px;
  }
`;

const VideoWrap = styled.div`
  margin-top: 16px;
  @media ${device.TAB} {
    margin-top: 38px;
  }
`;

const Hdline = styled.h1`
  font-weight: bold;
  font-size: 60px;
  line-height: 1;
  @media ${device.TAB} {
    font-size: 90px;
  }
  @media ${device.PC} {
    font-size: 120px;
  }
`;

const Text = styled.p`
  text-align: justify;
  @media ${device.TAB} {
    margin-top: 30px;
  }
`;

const VideoWrapD2 = styled(VideoWrap)`
  @media ${device.PC} {
    margin-top: 0;
    width: 50%;
    float: left;
  }
`;

const HdlineD2 = styled(Hdline)`
  @media ${device.PC} {
    padding-left: 40px;
    font-size: 44px;
    width: 50%;
    float: right;
  }
`;

const TextD2 = styled(Text)`
  @media ${device.PC} {
    padding-left: 40px;
    width: 50%;
    float: right;
  }
`;

export default PatternD;
