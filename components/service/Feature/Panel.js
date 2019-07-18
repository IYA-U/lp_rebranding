import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import device from '../../../styleConfigs/breakPoints';

import { Config } from '../../Layout/withLayout';

const Panel = ({ numStr, title, filter }) => {
  const config = useContext(Config);
  const initialAccordionState = config.device.isPc;
  console.log(config.device.isPc);
  const [isOpen, setOpen] = useState(initialAccordionState);
  const animation = useSpring({
    height: isOpen ? '200px' : '0px',
  });
  const handleClick = () => {
    if (config.device.isPc) return;
    setOpen(!isOpen);
  };

  return (
    <Wrap
      onClick={handleClick}
      filter={filter}>
      <Main>
        <h3>{numStr}</h3>
        <h4 dangerouslySetInnerHTML={{ __html: title }}></h4>
        <PcText>
          目を覚ましました。朝、目を覚ますということは、いつもあることで、別に変ったことではありません。しかし、何が変なのでしょう？
          何かしら変なのです。
        </PcText>
      </Main>
      <Toggle style={animation}>
        <div>
          目を覚ましました。朝、目を覚ますということは、いつもあることで、別に変ったことではありません。しかし、何が変なのでしょう？
          何かしら変なのです。
        </div>
      </Toggle>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  color: white;
  filter: ${({ filter }) => filter};
`;

const Main = styled.div`
  padding: 35px 28px;
  @media ${device.TAB} {
    padding: 40px 40px 50px;
  }
  h3 {
    font-size: 50px;
    font-weight: bold;
  }

  h4 {
    font-size: 22px;
    font-weight: bold;
    line-height: 1.3;
  }
`;

const Toggle = styled(animated.div)`
  overflow: hidden;
  div {
    padding: 30px;
  }
`;

const PcText = styled.div`
  display: none;
  padding-top: 20px;
  text-align: justify;
  @media ${device.TAB} {
    display: block;
  }
`;

export default Panel;
