import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import FlipCard from '../../common/FlipCard';

const Card = ({
  num, title, paragraph, backGroundColor,
}) => (
  <FlipCard
    front={
      <Wrap backGroundColor={backGroundColor}>
        <Num>{num}</Num>
        <Title dangerouslySetInnerHTML={{ __html: title }} />
      </Wrap>
    }
    back={
      <Wrap backGroundColor={backGroundColor}>
        <Paragraph>{paragraph}</Paragraph>
      </Wrap>
    }
  />
);

const Wrap = styled.div`
  background-color: ${({ backGroundColor }) => backGroundColor};
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;

const Num = styled.h2`
  font-size: 35px;
  font-weight: bold;
  width: 100%;
`;
const Title = styled.h2`
  font-weight: bold;
  letter-spacing: 0.05em;
  line-height: 1.4;
  width: 100%;
`;
const SmallTitle = styled.div``;
const Paragraph = styled.p`
  font-weight: 300;
  line-height: 1.5;
`;

export default Card;
