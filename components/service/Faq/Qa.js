import React, { useState } from 'react';
import styled from 'styled-components';
import device from '../../../styleConfigs/breakPoints';

const Qa = ({ data }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleQa = () => {
    setOpen(!isOpen);
  };
  return (
    <FaqList>
      <DefList>
        <DefTerm
          isOpen={isOpen}
          onClick={toggleQa}>
          {data.term}
          <Arrow
            isOpen={isOpen}
            onClick={toggleQa} />
        </DefTerm>
        <DefDes
          isOpen={isOpen}
          onClick={toggleQa}>
          <p> {data.description}</p>
        </DefDes>
      </DefList>
    </FaqList>
  );
};

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
  cursor:pointer;
  @media ${device.TAB} {
    font-size: 2rem;
    line-height: 3rem;
    padding: 3.8rem 6rem 3.4rem 6rem;
    }
  }
`;

const DefDes = styled.dd`
  background-color: #f2f2f2;

  margin-top: 0.2rem;
  padding-bottom: ${({ isOpen }) => (isOpen ? '3.2rem' : '0')};
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: ${({ isOpen }) => (isOpen ? '3.2rem' : '0')};
  transition-duration: 0.5s;
  transition-timing-function: ease-out;
  @media ${device.TAB} {
    margin-top: 0.4rem;
    padding-left: 6rem;
    padding-right: 6rem;
  }
  p {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    font-size: 1.4rem;
    font-weight: 300;
    letter-spacing: 0.2rem;
    line-height: 1.9;
    text-align: justify;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;
    @media ${device.TAB} {
      font-size: 1.8rem;
      line-height: 2;
    }
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
    width: 18px;
    height: 2px;
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
    transform: rotate(${({ isOpen }) => (isOpen ? '90deg' : '180deg')});
    transition-duration: 0.5s;
    width: 2px;
    @media ${device.TAB} {
      width: 2px;
      height: 18px;
    }
  }
`;

export default Qa;
