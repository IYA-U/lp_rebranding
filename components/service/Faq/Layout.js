import React from 'react';
import styled from 'styled-components';
import device from '../../../styleConfigs/breakPoints';

export const FaqBody = styled.div`
  background-color: #f7f7f7;
  color: #505050;
  height: auto;
  position: relative;
  width: 100%;
  @media ${device.TAB} {
    max-width: 1152px;
    margin: 0 auto;
  }
`;

export const Title = styled.h3`
  font-size: 3.2rem;
  font-weight: 300;
  letter-spacing: 0.6rem;
  line-height: 3.2rem;
  padding: 4.5rem 3.2rem 3.5rem 3.2rem;
  text-align: left;
  @media ${device.TAB} {
    text-align: center;
    font-size: 6.4rem;
    line-height: 6.4rem;
    font-weight: 400;
    padding: 8rem 0 7rem 0;
  }
`;

export const FaqWrap = styled.ul`
  height: auto;
  margin: 0;
  padding: 0;
  position: relative;
  @media ${device.TAB} {
  }
`;
