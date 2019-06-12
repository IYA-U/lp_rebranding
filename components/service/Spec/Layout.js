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
  padding: 0 3rem;
  text-align: left;
  letter-spacing: 0.4rem;
  font-weight: 400;
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
    margin:8rem auto 0 auto;
  }
`;

export const SpecList = styled.li `
  padding: 3.2rem 3rem;
  &:nth-child(odd){
    background-color: #F7F7F7;
  }
  &:nth-child(even){
    background-color: #fff;
  }
  @media ${device.TAB} {
    padding: 3rem 6rem;
  }
`;

export const DefList = styled.dl `
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.4rem;
  & > .underline{
    p {
      border-bottom:1px solid #505050;
    }
  }
  @media ${device.TAB} {
    font-size: 3rem;
    line-height: 3rem;
  }
`;

export const DefTerm = styled.dt `
  margin: 0;
  padding: 0;
  font-size: inherit;
  font-weight: inherit;
  text-align:left;
  flex:1;
  & > p{
    display: inline-block;
    font-size:inherit;
    font-weight:inherit;
    line-height:inherit;
  }
  @media ${device.TAB} {
  }
`;

export const DefDes = styled.dd `
  margin: 0;
  padding: 0;
  & > p{
    display:inline-block;
    margin:0 auto;
    font-size:inherit;
    font-weight:inherit;
    line-height:inherit;
    & > img{
      display: inline-block;
      margin: auto;
      width:14px;
      height:auto;
      @media ${device.TAB} {
        width: 28px;
      }
    }
  }
  @media ${device.TAB} {
    width:210px;
    text-align:center;
  }
`;

export const DefaultWrap = styled.div `
  & > ul{
    & > li:nth-child(n + 6){
      display: none;
      @media ${device.TAB} {
        display: block;
      }
    }
  }
`;

export const MoreWrap = styled.div `
  & > ul{
    @media ${device.TAB}{
      display: none;
    }
      & > li:nth-child(-n + 5){
        display: none;
      }
    }
`;

export const TogglerWrap = styled.div `
  display: block;
  font-weight: bold;
  text-align: center;
  margin: 2.4rem auto 0 auto;
  & > p {
    display: inline-block;
    border-bottom: 2px solid #505050;
    position: relative;
    line-height: 1.4rem;
    padding-bottom: 0.4rem;
    padding-left: 0.4rem;
  }
  @media ${device.TAB} {
    display: none;
  }
`;

export const Arrow = styled.span `
  position: relative;
  display: inline-block;;
  top: -0.5rem;
  bottom: auto;
  right: 0;
  left: auto;
  width: 12px;
  height: 2px;
  background-color: #505050;
  margin-left: 1.4rem;
  margin-right: 0.4rem;
  &::after{
    content:"";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 2px;
    height: 12px;
    background-color: #505050;
  }
`;