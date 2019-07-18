import React from 'react';
import styled from 'styled-components';
import device from '../../../styleConfigs/breakPoints';

import Panel from './Panel';

const Feature = ({ title }) => (
  <Wrap>
    <Title>
      見放題作品数No.1
      <Br />
      <span>U-NEXT</span>とは
    </Title>
    <PanelWrap>
      {[
        {
          numStr: '01',
          title: '130,000本以上が見放題！<br/>最新レンタル作品も充実。',
          filter: 'brightness(120%)',
        },
        {
          numStr: '02',
          title: '130,000本以上が見放題！<br/>最新レンタル作品も充実。',
          filter: 'brightness(110%)',
        },
        {
          numStr: '03',
          title: '130,000本以上が見放題！<br/>最新レンタル作品も充実。',
          filter: 'brightness(100%)',
        },
        {
          numStr: '04',
          title: '130,000本以上が見放題！<br/>最新レンタル作品も充実。',
          filter: 'brightness(90%)',
        },
      ].map((params) => (
        <Panel
          {...params}
          key={params.numStr} />
      ))}
    </PanelWrap>
  </Wrap>
);

const Title = styled.h2`
  color: #505050;
  font-size: 32px;
  line-height: 1.4;
  padding: 60px 30px;
  span {
    color: ${({ theme }) => theme.colors.dark};
  }
  @media ${device.TAB} {
    font-size: 36px;
    display: block;
    text-align: center;
    padding: 120px 0;
  }
`;

const Wrap = styled.div`
  background-color: rgba(0, 0, 0, 0.04);
`;

const PanelWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.TAB} {
    flex-direction: row;
  }
`;

const Br = styled.br`
  @media ${device.TAB} {
    display: none;
  }
`;

export default Feature;
