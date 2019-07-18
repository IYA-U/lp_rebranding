import React from 'react';
import styled from 'styled-components';
import device from '../../../styleConfigs/breakPoints';

const Trial = () => (
  <Wrap>
    <Title>
        無料トライアルの
      <br />
        2つの特典
    </Title>
    <TokurenWrap>
      {TOKUTEN.map((data) => (
        <TokurenLi background={data.background}>
          <Text dangerouslySetInnerHTML={{ __html: data.text }} />
        </TokurenLi>
      ))}
    </TokurenWrap>
    <TextExe>
        U-NEXTがお届けするサービスを、31⽇間ゆっくりとお試しください。
    </TextExe>
  </Wrap>
);

const Wrap = styled.div`
  background-color: #15aa93;
  padding-bottom: 40px;
  @media ${device.PC} {
    padding: 0 60px;
    max-width: 1152px;
    margin: 0 auto;
    padding-bottom: 84px;
  }
`;

const Title = styled.h3`
  color: #ffffff;
  font-size: 32px;
  padding-left: 32px;
  padding-top: 40px;
  text-align: left;
  @media ${device.PC} {
    font-size: 64px;
    padding-top: 84px;
    text-align: center;
  }
  br {
    display: block;
    @media ${device.PC} {
      display: none;
    }
  }
`;

const TokurenWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  @media ${device.PC} {
    margin: 40px 60px 0 60px;
  }
`;

const TokurenLi = styled.li`
  background-image: url(${({ background }) => background});
  background-size: cover;
  position: relative;
  width: 50%;

  @media ${device.PC} {
    width: 100%;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.1);
    background-size: auto 200px;
    background-repeat: no-repeat;
  }
  &:nth-child(2) {
    @media ${device.PC} {
      margin-top: 16px;
    }
  }
`;

const Text = styled.p`
  color: #ffffff;
  font-size: 16px;
  margin: 40px 32px;
  text-align: justfy;
  @media ${device.TAB} {
    font-size: 28px;
    margin: 60px 60px;
  }
  @media ${device.PC} {
    font-size: 28px;
    margin: 0;
    position: absolute;
    top: 48px;
    left: 254px;
  }
  br {
    display: none;
    @media ${device.TAB} {
      display: block;
    }
  }
`;

const TextExe = styled.p`
  color: #ffffff;
  font-size: 16px;
  margin: 20px 32px 0 32px;
  text-align: justfy;
  @media ${device.PC} {
    margin-top: 40px;
    font-size: 32px;
    text-align: center;
  }
`;

export const TOKUTEN = [
  {
    text: '⾒放題の動画が、90,000本以上。<br>読み放題の雑誌が、70誌以上。',
    background: '/static/img/trial_bg01@2x.png',
  },
  {
    text: 'レンタル作品などに使える600円分の<br>ポイントをプレゼント。',
    background: '/static/img/trial_bg02@2x.png',
  },
];

// TOKUTEN.propTypes = {
//   text: PropTypes.string.isRequired,
//   background: PropTypes.string,
// };
export default Trial;
