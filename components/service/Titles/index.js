import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styleConfigs/breakPoints';

const Titles = () => (
  <Wrap>
    <picture>
      <source
        media="(min-width: 640px)"
        srcSet="/static/img/service/titles/titles--pc.jpg"
      />
      <source
        media="(max-width: 639px)"
        srcSet="/static/img/service/titles/titles--sp.jpg"
      />
      <img
        src="/static/img/service/titles/titles--pc.jpg"
        alt="" />
    </picture>
  </Wrap>
);

const Wrap = styled.div`
  margin-top: 60px;
  @media ${media.md} {
    margin-top: 120px;
  }
`;

export default Titles;
