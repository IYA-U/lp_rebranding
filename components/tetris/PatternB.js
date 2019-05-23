import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import device from '../../styleConfigs/breakPoints';

const PatternB = () => (
  <Wrap>
    <Container>
      <h1>出会うことのない二人の出会い</h1>
      <h2>晴天というのは不思議なものだ、と学校への坂道を登りながら西脇融（にしわきとおる）は考えた</h2>
      <p>
        こんなふうに、朝から雲一つない文句なしの晴天に恵まれていると、それが最初か ら当たり前のように思えて、すぐにそのありがたみなど忘れてします。だが、もし今 のお天気がどんよりとした曇り空だったらどうだろう。または、ポツポツと雨が降っ
        ていたりしたら。ましてや、吹き降りだったりしたら？
      </p>
    </Container>
  </Wrap>
);

const Wrap = styled.div`
  padding: 20px;
  @media ${device.TAB} {
    padding: 50px;
  }
  @media ${device.PC} {
    padding: 100px;
  }
`;

export default PatternB;
