import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import device from '../../../styleConfigs/breakPoints';
import SubPatternWrap from '../common/SubPatternWrap';

const NoFill = () => (
  <>
    <SubPatternWrap name="B-1">
      <Container>
        <SectionWrap>
          <H1B1>ここがすごい、３つのポイント！</H1B1>
          <H3B1>世界中で社会現象を起こしている「ウォーキングデッド」</H3B1>
          <B1Text>極限に追い込まれた人間の心理を描いたヒューマンドラマ。現代社会の安全が破壊され秩序を失った世界で、生存者たちは確固たる人間性を保てるのか？そして生きるための「愛、強さ、責任感、自制心」とは?</B1Text>
          <FullImg>
            <img src="/static/img/twd.jpg" />
          </FullImg>
        </SectionWrap>
      </Container>
    </SubPatternWrap>

    <SubPatternWrap name="B-2">
      <Container>
        <SectionWrap>
          <Row>
            <Col xs="12">
              <H3>世界中で社会現象を起こしている「ウォーキングデッド」</H3>
              <H1>ここがすごい、３つのポイント！</H1>
            </Col>
          </Row>
          <Row>
            <Col
              xs="12"
              md="6">
              <ImgWrap>
                <img src="/static/img/twd.jpg" />
              </ImgWrap>
            </Col>
            <Col
              xs="12"
              md="6">
              <TextBlock>
                <H2>01. ただのゾンビ•ドラマと思うなかれ！</H2>
                <Text>
                  極限に追い込まれた人間の心理を描いたヒューマンドラマ。現代社会の安全が破壊され秩序を失った世界で、生存者たちは確固たる人間性を保てるのか？そして生きるための「愛、強さ、責任感、自制心」とは?極限に追い込まれた人間の心理を描いたヒューマンドラマ。
                </Text>
              </TextBlock>
            </Col>
          </Row>
          <Row>
            <Col
              xs="12"
              md="6">
              <ImgWrap>
                <img src="/static/img/twd.jpg" />
              </ImgWrap>
            </Col>
            <Col
              xs="12"
              md="6">
              <TextBlock>
                <H2>02. エミー賞授賞！迫力のゾンビと鬼気迫るサバイバル劇！</H2>
                <Text>
                  2011年から2年連続でエミー賞メイクアップ賞を受賞。また、音響効果賞、視覚効果賞ノミネートなど、疑う余地のない圧倒的なレベルの高さで描かれる、圧巻の“ウォーカー”たちと、その大群を迎え撃つ生存者たちとのサバイバル劇は「ウォーキング・デッド」の代名詞。
                </Text>
              </TextBlock>
            </Col>
          </Row>
        </SectionWrap>
      </Container>
    </SubPatternWrap>
  </>
);

const SectionWrap = styled.div`
  padding: 60px 15px;
  @media ${device.TAB} {
    padding: 85px 40px;
  }
  @media ${device.PC} {
    padding: 160px 0;
  }
`;

const H1 = styled.div`
  font-size: 30px;
  text-align: center;
  line-height: 1.3;
  font-weight: bold;
  margin-top: 12px;

  @media ${device.TAB} {
    margin-top: 12px;
    font-size: 36px;
  }
  @media ${device.PC} {
    font-size: 44px;
    margin-top: 30px;
  }
`;

const H2 = styled.div`
  font-size: 26px;
  text-align: left;
  line-height: 1.3;
  font-weight: bold;
  margin-top: 10px;
  @media ${device.TAB} {
    font-size: 26px;
  }
  @media ${device.PC} {
    font-size: 34px;
  }
`;

const H3 = styled.div`
  font-size: 20px;
  line-height: 1.3;
  text-align: center;
  font-weight: bold;
  @media ${device.TAB} {
    font-size: 22px;
  }
  @media ${device.PC} {
    font-size: 26px;
  }
`;

const H1B1 = styled(H1)`
  margin-top: 16px;
  @media ${device.PC} {
    font-size: 50px;
  }
`;

const H3B1 = styled(H3)`
  margin-top: 16px;
  @media ${device.TAB} {
    margin-top: 20px;
  }
  @media ${device.PC} {
    margin-top: 40px;
  }
`;

const Text = styled.p`
  margin-top: 16px;
`;

const ImgWrap = styled.div`
  margin-top: 20px;

  @media ${device.TAB} {
    margin-top: 40px;
  }
  @media ${device.PC} {
    margin-top: 80px;
  }
`;

const TextBlock = styled.div`
  @media ${device.TAB} {
    padding: 0px 40px;
    margin-top: 40px;
  }
  @media ${device.PC} {
    margin-top: 80px;
  }
`;

const FullImg = styled.div`
  margin-top: 30px;
  @media ${device.PC} {
    margin-top: 80px;
  }
`;

const B1Text = styled.p`
  margin-top: 16px;
  @media ${device.TAB} {
    padding: 0 40px;
    margin-top: 20px;
  }
  @media ${device.PC} {
    margin-top: 40px;
  }
`;

export default NoFill;
