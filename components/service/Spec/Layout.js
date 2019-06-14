import React from 'react';
import styled from 'styled-components';
import device from '../../../styleConfigs/breakPoints';

export const SpecBody = styled.div `
  background-color: #fff;
  color: #505050;
  width: 100%;
  margin:-top: 4rem;
  margin-bottom: 6rem;
  @media ${device.TAB} {
    max-width: 1152px;
    margin: 8rem auto 12rem auto;
  }
`;

export const Title = styled.h3 `
  font-size: 3.2rem;
  font-weight: 400;
  letter-spacing: 0.4rem;
  padding: 0 3rem;
  text-align: left;
  @media ${device.TAB} {
    text-align: center;
    font-size: 6.4rem;
    line-height: 6.4rem;
    letter-spacing: 0.6rem;
  }
`;

export const SpecWrap = styled.ul `
  margin: 4rem auto 0 auto;
  padding: 0;
  @media ${device.TAB} {
    margin: 8rem auto 0 auto;
  }
`;

export const DefaultWrap = styled.div `
  & > ul {
    & > li:nth-child(n + 6) {
      display: none;
      @media ${device.TAB} {
        display: block;
      }
    }
  }
`;

export const MoreWrap = styled.div `
  & > ul {
    @media ${device.TAB} {
      display: none;
    }
    & > li:nth-child(-n + 5) {
      display: none;
    }
  }
`;

export const TogglerWrap = styled.div `
  display: block;
  font-weight: bold;
  margin: 2.4rem auto 0 auto;
  text-align: center;
  & > p {
    border-bottom: 2px solid #505050;
    display: inline-block;
    line-height: 1.4rem;
    padding-bottom: 0.4rem;
    padding-left: 0.4rem;
    position: relative;
  }
  @media ${device.TAB} {
    display: none;
  }
`;

export const Arrow = styled.span `
  background-color: #505050;
  bottom: auto;
  display: inline-block;
  height: 2px;
  left: auto;
  margin-left: 1.4rem;
  margin-right: 0.4rem;
  position: relative;
  right: 0;
  top: -0.5rem;
  width: 12px;
  &::after {
    background-color: #505050;
    bottom: 0;
    content: '';
    display: block;
    height: 12px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 2px;
  }
`;