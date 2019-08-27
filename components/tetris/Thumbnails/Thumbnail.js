import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styleConfigs/breakPoints';

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
  background-color: ${({ theme }) => theme.colorConfig.colors.dark};
  color: white;
  height: 50px;
  position: relative;
  width: 100%;
  @media ${media.lg} {
    height: 60px;
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
    @media ${media.lg} {
      right: 6%;
      width: 14px;
      height: 14px;
    }
  }
  &:after {
    background-color: ${({ theme }) => theme.colorConfig.colors.dark};
    content: '';
    filter: brightness(120%);
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 15%;
    @media ${media.lg} {
      width: 15%;
      height: 100%;
    }
  }
`;
const CardText = styled.p`
  font-size: 14px;
  line-height: 50px;
  overflow: hidden;
  padding: 0 55px 0 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  a {
    color: #000000;
    font-size: 14px;
    text-decoration: none;
  }

  @media ${media.lg} {
    font-size: 18px;
    padding: 0 80px 0 22px;
    line-height: 60px;
    a {
      font-size: 18px;
    }
  }
`;

const CardLink = styled.a`
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.2);
  color: #000000;
  display: block;
  margin: 30px 10px 0;
  text-decoration: none;
  @media ${media.lg} {
    box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.2);
    margin: 60px 10px 0;
  }

  &:hover {
    color: #000000;
    filter: brightness(120%);
    text-decoration: none;
    transition: 0.2s;
  }
`;
export default Thumbnail;
