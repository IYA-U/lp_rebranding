import React from 'react';
import styled from 'styled-components';
import device from '../../../styleConfigs/breakPoints';

export const SpecBody = styled.div `
background-color:#fff;
  @media ${device.TAB} {
  }
`;

export const Title = styled.h3 `
font-size:3.2rem;
text-align:left;
letter-spacing:0.4rem;
font-weight:400;
  @media ${device.TAB} {
    text-align:center;
  }
`;

export const SpecWrap = styled.ul `
  @media ${device.TAB} {
  }
`;

export const SpecList = styled.li `
  @media ${device.TAB} {
  }
`;

export const DefList = styled.dl `
  margin:0;
  padding:0;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
& > .underline{
    text-decoration:underline;
    color:blue;
}
  @media ${device.TAB} {
  }
`;

export const DefTerm = styled.dt `
  margin:0;
  padding:0;
  @media ${device.TAB} {
  }
`;

export const DefDes = styled.dd `
  margin:0;
  padding:0;
  @media ${device.TAB} {
  }
`;

export const DefaultWrap = styled.div `
  & > ul{
    & > li:nth-child(n+6){
      display:none;
      @media ${device.TAB} {
        display:block;
      }
    }
  }
`;

export const MoreWrap = styled.div `
  & > ul{
    color:green;
    @media ${device.TAB}{
      display:none;
    }
      & > li:nth-child(-n+5){
        display:none;
      }
    }
`;

export const TogglerWrap = styled.div `
  display:block;
  @media ${device.TAB}{
    display:none;
  }
`;