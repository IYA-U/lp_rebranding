import React from 'react';
import styled from 'styled-components';
import device from '../../../styleConfigs/breakPoints';

const Titles = () => (
  <Wrap>
    <picture>
      <source
        media="(min-width: 640px)"
        srcset="/static/img/service/titles/titles--pc.jpg"
      />
      <source
        media="(max-width: 639px)"
        srcset="/static/img/service/titles/titles--sp.jpg"
      />
      <img
        class="w-100"
        src="/static/img/service/titles/titles--pc.jpg"
        alt=""
      />
    </picture>
  </Wrap>
);

const Wrap = styled.div`
  margin-top: 60px;
  @media ${device.TAB} {
    margin-top: 120px;
  }
`;

export default Titles;
