import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styleConfigs/breakPoints';

const Card = ({
  img, lead, title, paragraph, colors,
}) => (
  <Wrap>
    <ImgBox>
      <img src={img} />
    </ImgBox>
    <TextArea>
      <h4>{lead}</h4>
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      <p>{paragraph}</p>
    </TextArea>
  </Wrap>
);

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.cardBody};
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  margin-top: 30px;
  @media ${media.md} {
    margin-top: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }
  @media ${media.lg} {
    margin-top: 60px;
    margin-left: 6px;
    margin-right: 6px;
  }
`;

const ImgBox = styled.div`
  height: 0;
  overflow: hidden;
  padding-bottom: 100%;
  position: relative;
  width: 100%;
  & > img {
    height: auto;
    left: 50%;
    max-height: initial;
    max-width: 110%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    @media ${media.md} {
    }
    @media ${media.lg} {
    }
  }
`;

const TextArea = styled.div`
  color: ${({ theme }) => theme.cardText};
  padding: 30px 20px;
  @media ${media.md} {
    padding: 40px 23px;
    min-height: 360px;
  }
  @media ${media.lg} {
    padding: 40px 23px;
    min-height: 370px;
  }

  h4 {
    font-weight: bold;
    line-height: 1;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 24px;
    font-weight: bold;
    line-height: 1;
    line-height: 1.5;
    @media ${media.lg} {
      font-size: 2.6rem;
    }
  }
  p {
    font-weight: 400;
    line-height: 1.8;
    margin-top: 20px;
  }
`;

export default Card;
