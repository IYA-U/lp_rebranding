import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import device from '../../../styleConfigs/breakPoints';

const Card = ({
  img, lead, title, paragraph,
}) => (
  <Wrap>
    <img src={img} />
    <TextArea>
      <h4>{lead}</h4>
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </TextArea>
  </Wrap>
);

const Wrap = styled.div`
  background-color: #fdba47;
  margin-top: 20px;
  /* box-shadow: 10px 10px 15px 3px rgba(0, 0, 0, 0.4); */
  @media ${device.TAB} {
    margin-top: 40px;
    margin-left: 10px;
    margin-right: 10px;
  }
  @media ${device.PC} {
    margin-top: 80px;
    margin-left: 6px;
    margin-right: 6px;
  }
`;

const TextArea = styled.div`
  padding: 16px 20px;
  @media ${device.PC} {
    padding: 20px 26px;
  }

  h4 {
    font-weight: bold;
    line-height: 1;
  }
  h3 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: bold;
    line-height: 1;
  }
  p {
    margin-top: 10px;
  }
`;

export default Card;
