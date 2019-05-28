import React from 'react';
import styled from 'styled-components';
import device from '../../../styleConfigs/breakPoints';

const SideCard = ({ is64, isLeft }) => (
  <Wrap isLeft={isLeft}>
    <ImgWrap is64={is64}>
      <Img src="/static/img/seven.jpg" />
    </ImgWrap>
    <TextArea is64={is64}>
      <h3>全米興行成績1位に輝いた大ヒット映画</h3>
      <p>極限に追い込まれた人間の心理を描いたヒューマンドラマ。現代社会の安全が破壊され秩序を失った世界で、生存者たちは確固たる人間性を保てるのか？そして生きるための「愛、強さ、責任感、自制心」とは？</p>
    </TextArea>
  </Wrap>
);

const Wrap = styled.div`
  margin-top: 20px;
  background-color: #fdba47;
  @media ${device.TAB} {
    margin-top: 40px;
    display: flex;
    flex-direction: ${({ isLeft }) => (isLeft ? 'row-reverse' : 'row')};
  }
  @media ${device.PC} {
    margin-top: 80px;
    margin-left: 6px;
    margin-right: 6px;
  }
`;

const Img = styled.img`
  @media ${device.TAB} {
    display: none;
  }
`;

const ImgWrap = styled.div`
  overflow: hidden;
  background-image: url('/static/img/seven.jpg');
  background-position: center;
  background-size: cover;
  @media ${device.TAB} {
    width: 50%;
  }
  @media ${device.PC} {
    width: ${({ is64 }) => (is64 ? '40%' : '50%')};
  }
`;

const TextArea = styled.div`
  padding: 15px 20px 60px;
  @media ${device.TAB} {
    padding: 36px 40px;
    width: 50%;
  }
  @media ${device.PC} {
    padding: 76px 40px;
    width: ${({ is64 }) => (is64 ? '60%' : '50%')};
  }

  h3 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: bold;
    line-height: 1.2;
    @media ${device.TAB} {
      font-size: 28px;
    }
    @media ${device.PC} {
      font-size: 34px;
    }
  }
  p {
    margin-top: 10px;
    @media ${device.TAB} {
      margin-top: 16px;
    }
  }
`;

export default SideCard;
