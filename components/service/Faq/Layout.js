import React from 'react';
import styled from 'styled-components';
import device from '../../../styleConfigs/breakPoints';

export const FaqBody = styled.div `
  background-color:#F7F7F7;
  color:#505050;
  width: 100%;
  height: auto;
  position: relative;
  @media ${device.TAB} {
    max-width:1152px;
    margin:0 auto;
  }
`;

export const Title = styled.h3 `
  text-align: left;
  font-size: 3.2rem;
  line-height: 3.2rem;
  font-weight: 300;
  letter-spacing: 0.6rem;
  padding: 4.5rem 3.2rem 3.5rem 3.2rem;
  @media ${device.TAB} {
    text-align: center;
    font-size: 6.4rem;
    line-height: 6.4rem;
    font-weight: 400;
    padding: 8rem 0 7rem 0;
  }
`;

export const FaqWrap = styled.ul `
  position: relative;
  margin: 0;
  padding: 0;
  height: auto;
  @media ${device.TAB} {
  }
`;