import React from 'react';
import styled from 'styled-components';

import device from '../../../styleConfigs/breakPoints';

export const FaqBody = styled.div`
  color: #505050;
  height: auto;
  position: relative;
  width: 100%;
  @media ${device.TAB} {
    max-width: 1152px;
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  color: #505050;
  font-size: 32px;
  line-height: 1.4;
  padding: 45px 30px;
  span {
    color: ${({ theme }) => theme.colorConfig.colors.dark};
  }
  @media ${device.TAB} {
    font-size: 36px;
    display: block;
    text-align: center;
    padding: 120px 0;
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
