import React from 'react';
import styled from 'styled-components';

const PictureFullWidth = ({ srcPc, srcSp, alt }) => (
  <Picture>
    <source media="(min-width: 640px)" srcSet={srcPc} />
    <source media="(max-width: 639px)" srcSet={srcSp} />
    <img src={srcPc} alt={alt} />
  </Picture>
);

const Picture = styled.picture`
  width: 100%;
  min-width: 100%;
  & > img {
    width: 100%;
  }
`;

export default PictureFullWidth;
