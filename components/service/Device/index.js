import React from 'react';
import styled from 'styled-components';
import device from '../../../styleConfigs/breakPoints';

const Device = () => (
  <Wrap>
    <img
      src="/static/img/service/device/device.png"
      alt=""></img>
  </Wrap>
);

const Wrap = styled.div`
  padding: 50px 10px 30px;
  @media ${device.TAB} {
    padding: 100px 0px 0px;

    max-width: 1152px;
    margin: 0 auto;
  }
`;

export default Device;
