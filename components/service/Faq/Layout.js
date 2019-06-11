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

export const FaqList = styled.li `
  position: relative;
  height: auto;
  margin: 0;
  padding: 0;
`;

export const DefList = styled.dl `
  position: relative;
  height: auto;
  margin: 0;
  padding: 0;
`;

export const DefTerm = styled.dt `
  position: relative;
  background-color: #F2F2F2;
  margin-top:1rem;
  padding: 3rem 3.2rem 2.8rem 3.2rem;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.4rem;
  vertical-align: middle;
  letter-spacing: 0.1rem;
  @media ${device.TAB} {
    font-size: 3rem;
    line-height: 3rem;
    padding: 3.8rem 6rem 3.4rem 6rem;
  }
  .open{
    &:after{
      transform:rotate(90deg)!important;
    }
  }
`;

export const DefDes = styled.dd `
  background-color: #F2F2F2;
  margin-top: 0.2rem;
  padding: 3rem 3.2rem;
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.9;
  letter-spacing: 0.2rem;
  text-align: justify;
  @media ${device.TAB} {
    margin-top: 0.4rem;
    padding: 3.2rem 6rem;
    font-size: 2.6rem;
    line-height: 2;
  }
`;

export const Arrow = styled.span `
  position:absolute;
  top:0;
  bottom:0;
  right:3.2rem;
  left:auto;
  margin:auto 0;
  width:15px;
  height:2px;
  background-color:#505050;
  @media ${device.TAB} {
    width:30px;
    height:4px;
  }
  &:after{
    content:"";
    display:block;
    width:2px;
    height:15px;
    background-color:#505050;
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    margin:auto;
    @media ${device.TAB} {
      width:4px;
      height:30px;
    }
  }
`;