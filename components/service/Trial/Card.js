import React from 'react';
import styled from 'styled-components';
import device from '../../../styleConfigs/breakPoints';

const Card = ({ lead, main, numberText }) => (
  <Wrap>
    <Up>
      <p dangerouslySetInnerHTML={{ __html: lead }}></p>
      <h3 dangerouslySetInnerHTML={{ __html: main }}></h3>
    </Up>

    <Down dangerouslySetInnerHTML={{ __html: numberText }}></Down>
  </Wrap>
);

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.dark};
  color: white;
  width: 100%;
`;

const Up = styled.div`
  padding: 35px 15px;
  @media ${device.PC} {
    padding: 70px 50px;
  }
  p {
    font-size: 13px;
    line-height: 1.6;
    @media ${device.PC} {
      font-size: 24px;
      line-height: 1.2;
    }
  }
  h3 {
    font-size: 22px;
    font-weight: bold;
    line-height: 1.4;
    margin-top: 10px;
    @media ${device.PC} {
      margin-top: 20px;
      font-size: 48px;
      line-height: 1.2;
    }
  }
`;

const Down = styled.div`
  background-color: ${({ theme }) => theme.dark};
  filter: brightness(130%);
  font-size: 20px;
  padding: 15px;
  span {
    font-size: 35px;
    font-weight: bold;
    padding: 0 5px;
    @media ${device.PC} {
      font-size: 80px;
    }
  }
  @media ${device.PC} {
    padding: 40px 50px;
    font-size: 40px;
  }
`;

export default Card;
