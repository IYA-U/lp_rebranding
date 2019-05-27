import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { render } from 'react-dom';
import Slider from 'react-slick';
import device from '../../../styleConfigs/breakPoints';

class CardWrap extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <div>
          <Slider {...settings}>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
          </Slider>
        </div>
      </>
    );
  }
}

export default CardWrap;

const CardCol = styled.div`
  max-width: 320px;
  margin-top: 20px;
  margin-left: 20px;
  @media ${device.TAB} {
    margin-top: 40px;
  }
  @media ${device.PC} {
    max-width: 480px;
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
    border-top: solid 2px #ffffff;
    border-right: solid 2px #ffffff;
    transform: rotate(45deg);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 5%;
    margin: auto 0;
    z-index: 2;
    @media ${device.PC} {
      right: 7%;
      width: 16px;
      height: 16px;
    }
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 55px;
    height: 55px;
    background: #fdb847;
    @media ${device.PC} {
      width: 80px;
      height: 80px;
    }
  }
`;
const CardText = styled.p`
  font-size: 14px;
  line-height: 55px;
  padding: 0 55px 0 5px;
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
