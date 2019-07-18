import React from 'react';

const PictureFullWidth = ({ srcPc, srcSp, alt }) => (
  <picture>
    <source
      media="(min-width: 640px)"
      srcSet={srcPc} />
    <source
      media="(max-width: 639px)"
      srcSet={srcSp} />
    <img
      src={srcPc}
      alt={alt} />
  </picture>
);

export default PictureFullWidth;
