import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styleConfigs/breakPoints';

const Sl = (props) => (
  <SpecList>
    <DefList>
      <DefTerm className={props.data.hasunderlined ? 'underline' : null}>
        <p>{props.data.spec}</p>
      </DefTerm>
      <DefDes className={props.data.hasunderlined ? 'underline' : null}>
        <p>{props.data.detail}</p>
      </DefDes>
    </DefList>
  </SpecList>
);

const SpecList = styled.li`
  color: ${({ theme }) => theme.text};
  padding: 3.2rem 3rem;
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.rowOdd};
  }
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.rowEven};
  }
  @media ${media.md} {
    padding: 3rem 6rem;
  }
`;

const DefList = styled.dl`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.4rem;
  font-weight: 400;
  justify-content: space-between;
  line-height: 1.4rem;
  margin: 0;
  padding: 0;
  & > .underline {
    p {
      border-bottom: 1px solid #505050;
    }
  }
  @media ${media.md} {
    font-size: 20px;
    line-height: 3rem;
  }
`;

const DefTerm = styled.dt`
  flex: 1;
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
  padding: 0;
  text-align: left;
  & > p {
    display: inline-block;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
  @media ${media.md} {
  }
`;

const DefDes = styled.dd`
  margin: 0;
  padding: 0;
  & > p {
    display: inline-block;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    margin: 0 auto;
    & > img {
      display: inline-block;
      height: auto;
      margin: auto;
      width: 14px;
      @media ${media.md} {
        width: 28px;
      }
    }
  }
  @media ${media.md} {
    width: 210px;
    text-align: center;
  }
`;

export default Sl;
