import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import device from '../../../styleConfigs/breakPoints';

const Card = () => (
  <Wrap>
    <img src="/static/img/ironman.jpg" />
    <TextArea>
      <h4>対テロ組織の大佐</h4>
      <h3>イブ</h3>
      <p>腕っ節の強さを買われてスカウトされた、司書たちの護衛的存在。</p>
    </TextArea>
  </Wrap>
);

const Wrap = styled.div`
  margin-top: 20px;
  background-color: #fdba47;
  /* box-shadow: 10px 10px 15px 3px rgba(0, 0, 0, 0.4); */
  @media ${device.TAB} {
    margin-top: 40px;
    margin-left: 10px;
    margin-right: 10px;
  }
  @media ${device.PC} {
    margin-top: 80px;
    margin-left: 6px;
    margin-right: 6px;
  }
`;

const TextArea = styled.div`
  padding: 16px 20px;
  @media ${device.PC} {
    padding: 20px 26px;
  }

  h4 {
    font-weight: bold;
    line-height: 1;
  }
  h3 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: bold;
    line-height: 1;
  }
  p {
    margin-top: 10px;
  }
`;

export default Card;
