import React from 'react';
import styled from 'styled-components';
import device from '../../../styleConfigs/breakPoints';

const geometric = () => <Wrap src="/static/img/keyvisual/geometric/pc/geometric.png" />;

const Wrap = styled.div`
  background-image: url('/static/img/keyvisual/geometric/sp/geometric.png');
  background-position: center;
  background-size: cover;
  display: block;
  height: 75px;
  max-width: 100%;
  @media ${device.TAB} {
    top: 80px;
    max-width: 80px;
    background-image: url('/static/img/keyvisual/geometric/pc/geometric.png');
    height: 100%;
  }
`;

export default geometric;
