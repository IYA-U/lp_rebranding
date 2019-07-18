import React from 'react';

const PictureFullWidth = ({ srcPc, srcSp, alt }) => (
  <picture>
    <source
      media="(min-width: 640px)"
      srcset={srcPc} />
    <source
      media="(max-width: 639px)"
      srcset={srcSp} />
    <img
      class="w-100"
      src={srcPc}
      alt={alt} />
  </picture>
);

export default PictureFullWidth;
