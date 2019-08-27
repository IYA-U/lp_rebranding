import React from 'react';
import styled from 'styled-components';
import COLOR_MAP from './COLOR_MAP';
import withColorPropsWithMap from '../../../hoc/withColorProps';
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
          title: '動画も書籍も<br/>U-NEXTひとつでOK。',
          filter: 'brightness(110%)',
        },
        {
          numStr: '03',
          title: '毎月もらえる<br/>1,200ポイントでお得に。',
          filter: 'brightness(100%)',
        },
        {
          numStr: '04',
          title: '解約は<br/>いつでも簡単。',
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

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.background};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.title};
  font-size: 32px;
  line-height: 1.4;
  padding: 60px 30px;
  span {
    color: ${({ theme }) => theme.titleAccent};
  }
  @media ${device.TAB} {
    font-size: 36px;
    display: block;
    text-align: center;
    padding: 120px 0;
  }
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

export default withColorPropsWithMap(Feature, COLOR_MAP);
