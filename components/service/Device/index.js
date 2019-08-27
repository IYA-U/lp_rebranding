import React from 'react';
import styled from 'styled-components';
import COLOR_MAP from './COLOR_MAP';
import device from '../../../styleConfigs/breakPoints';
import withColorPropsWithMap from '../../../hoc/withColorProps';

const Device = () => (
  <Wrap>
    <Inner>
      <img
        src="/static/img/service/device/device.png"
        alt=""/ >
    </Inner>
  </Wrap>
);

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 100%;
`;

const Inner = styled.div`
  padding: 50px 10px 30px;
  @media ${device.TAB} {
    padding: 100px 0px 0px;
    max-width: 1152px;
    margin: 0 auto;
  }
`;

export default withColorPropsWithMap(Device, COLOR_MAP);
