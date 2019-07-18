import React from 'react';
import styled from 'styled-components';
import { UncontrolledCollapse } from 'reactstrap';
import device from '../../../styleConfigs/breakPoints';

const Qa = (props) => (
  <FaqList>
    <DefList>
      <DefTerm id={`toggler${props.data.no}`}>
        {props.data.term}
        <Arrow></Arrow>
      </DefTerm>
      <UncontrolledCollapse toggler={`#toggler${props.data.no}`}>
        <DefDes>{props.data.description}</DefDes>
      </UncontrolledCollapse>
    </DefList>
  </FaqList>
);

const FaqList = styled.li`
  height: auto;
  margin: 0;
  padding: 0;
  position: relative;
`;

const DefList = styled.dl`
  height: auto;
  margin: 0;
  padding: 0;
  position: relative;
`;

const DefTerm = styled.dt`
  background-color: #f2f2f2;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  line-height: 1.4rem;
  margin-top: 1rem;
  padding: 3rem 3.2rem 2.8rem 3.2rem;
  position: relative;
  vertical-align: middle;
  @media ${device.TAB} {
    font-size: 3rem;
    line-height: 3rem;
    padding: 3.8rem 6rem 3.4rem 6rem;
  }
  .open {
    &:after {
      transform: rotate(90deg) !important;
    }
  }
`;

const DefDes = styled.dd`
  background-color: #f2f2f2;
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: 0.2rem;
  line-height: 1.9;
  margin-top: 0.2rem;
  padding: 3rem 3.2rem;
  text-align: justify;
  @media ${device.TAB} {
    margin-top: 0.4rem;
    padding: 3.2rem 6rem;
    font-size: 2.6rem;
    line-height: 2;
  }
`;

const Arrow = styled.span`
  background-color: #505050;
  bottom: 0;
  height: 2px;
  left: auto;
  margin: auto 0;
  position: absolute;
  right: 3.2rem;
  top: 0;
  width: 15px;
  @media ${device.TAB} {
    width: 30px;
    height: 4px;
  }
  &:after {
    background-color: #505050;
    bottom: 0;
    content: '';
    display: block;
    height: 15px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 2px;
    @media ${device.TAB} {
      width: 4px;
      height: 30px;
    }
  }
`;

export default Qa;
