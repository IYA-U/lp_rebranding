import React from 'react';
import styled from 'styled-components';
import device from '../../../styleConfigs/breakPoints';

const Thumbnail = ({ text, thumbnail, sid }) => (
  <CardLink href={`https://www.video.unext.jp/title/${sid}`}>
    <CardImg
      variant="top"
      src={thumbnail} />
    <CardTextWrap>
      <CardText>{text}</CardText>
    </CardTextWrap>
  </CardLink>
);

const CardImg = styled.img`
  width: 100%;
`;

const CardTextWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  color: white;
  height: 55px;
  position: relative;
  width: 100%;
  @media ${device.PC} {
    height: 80px;
  }
  &:before {
    border: 0px;
    border-right: solid 3px #ffffff;
    border-top: solid 3px #ffffff;
    bottom: 0;
    content: '';
    height: 12px;
    margin: auto 0;
    position: absolute;
    right: 6%;
    top: 0;
    transform: rotate(45deg);
    width: 12px;
    z-index: 2;
    @media ${device.PC} {
      right: 6%;
      width: 16px;
      height: 16px;
    }
  }
  &:after {
    background-color: ${({ theme }) => theme.colors.dark};
    content: '';
    filter: brightness(130%);
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 15%;
    @media ${device.PC} {
      width: 15%;
      height: 100%;
    }
  }
`;
const CardText = styled.p`
  font-size: 14px;
  line-height: 55px;
  overflow: hidden;
  padding: 0 55px 0 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  a {
    color: #000000;
    font-size: 14px;
    text-decoration: none;
  }

  @media ${device.PC} {
    font-size: 18px;
    padding: 0 80px 0 30px;
    line-height: 80px;
    a {
      font-size: 18px;
    }
  }
`;

const CardLink = styled.a`
  color: #000000;
  display: block;
  margin: 20px 10px;
  text-decoration: none;

  &:hover {
    color: #000000;
    filter: brightness(120%);
    text-decoration: none;
    transition: 0.2s;
  }
`;
export default Thumbnail;
