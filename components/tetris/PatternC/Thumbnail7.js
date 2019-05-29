import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import device from '../../../styleConfigs/breakPoints';

const Thumbnail7 = () => (
  <CardWrap>
    <CardCol>
      <Link
        href="/"
        passHref>
        <CardLink>
          <CardImg
            variant="top"
            src="https://imgc.nxtv.jp/img/info/tit/00040/SID0040026.png" />
          <CardTextWrap>
            <CardText>ファントム•メナス(2018)</CardText>
          </CardTextWrap>
        </CardLink>
      </Link>
    </CardCol>
    <CardCol>
      <Link
        href="/"
        passHref>
        <CardLink>
          <CardImg
            variant="top"
            src="https://imgc.nxtv.jp/img/info/tit/00040/SID0040026.png" />
          <CardTextWrap>
            <CardText>ファントム•メナス(2018)</CardText>
          </CardTextWrap>
        </CardLink>
      </Link>
    </CardCol>
    <CardCol>
      <Link
        href="/"
        passHref>
        <CardLink>
          <CardImg
            variant="top"
            src="https://imgc.nxtv.jp/img/info/tit/00040/SID0040026.png" />
          <CardTextWrap>
            <CardText>ファントム•メナス(2018)</CardText>
          </CardTextWrap>
        </CardLink>
      </Link>
    </CardCol>
    <CardCol>
      <Link
        href="/"
        passHref>
        <CardLink>
          <CardImg
            variant="top"
            src="https://imgc.nxtv.jp/img/info/tit/00040/SID0040026.png" />
          <CardTextWrap>
            <CardText>ファントム•メナス(2018)</CardText>
          </CardTextWrap>
        </CardLink>
      </Link>
    </CardCol>
    <CardCol>
      <Link
        href="/"
        passHref>
        <CardLink>
          <CardImg
            variant="top"
            src="https://imgc.nxtv.jp/img/info/tit/00040/SID0040026.png" />
          <CardTextWrap>
            <CardText>ファントム•メナス(2018)</CardText>
          </CardTextWrap>
        </CardLink>
      </Link>
    </CardCol>
  </CardWrap>
);

const CardWrap = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  margin:0 20px 0 0;
  }
`;

const CardCol = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-left: 20px;
  @media ${device.TAB} {
    margin-top: 40px;
    width: 33.3333333333%;
  }
  @media ${device.PC} {
    margin-top: 80px;
  }
`;

const CardImg = styled.img`
  width: 100%;
  @media ${device.TAB} {
  }
  @media ${device.PC} {
  }
`;

const CardTextWrap = styled.div`
  width: 100%;
  height: 55px;
  background: #ffe4a3;
  position: relative;

  @media ${device.TAB} {
  }
  @media ${device.PC} {
    height: 80px;
  }
  &:before {
    content: '';
    width: 12px;
    height: 12px;
    border: 0px;
    border-top: solid 3px #ffffff;
    border-right: solid 3px #ffffff;
    transform: rotate(45deg);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 6%;
    margin: auto 0;
    z-index: 2;
    @media ${device.PC} {
      right: 6%;
      width: 16px;
      height: 16px;
    }
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 15%;
    height: 100%;
    background: #fdb847;
    @media ${device.PC} {
      width: 15%;
      height: 100%;
    }
  }
`;
const CardText = styled.p`
  font-size: 14px;
  line-height: 55px;
  padding: 0 55px 0 5px;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  a {
    font-size: 14px;
    text-decoration: none;
    color: #000000;
  }

  @media ${device.TAB} {
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
  text-decoration: none;
  color: #000000;
  &:hover {
    transition: 0.2s;
    text-decoration: none;
    filter: brightness(120%);
    color: #000000;
  }
`;
export default Thumbnail7;
