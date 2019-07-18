import React from 'react';
import styled from 'styled-components';
import device from '../../../styleConfigs/breakPoints';

import Panel from './Panel';

const Feature = ({ title }) => (
  <Wrap>
    <Title>
      見放題作品数No.1 <span>U-NEXT</span>とは
    </Title>
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
  </Wrap>
);

const Title = styled.h2``;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.TAB} {
    flex-direction: row;
  }
`;

export default Feature;
