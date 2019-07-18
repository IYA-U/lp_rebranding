import React from 'react';
import styled from 'styled-components';
import device from '../../../styleConfigs/breakPoints';

const Book = ({ img, link, alt }) => (
  <div>
    <a href={link}>
      <img
        src={`${img}?output-format=jpg&output-quality=60&resize=360:*&letterbox=5:7&bgblur=50,0.5`}
        alt={alt}
      ></img>
    </a>
  </div>
);

export default Book;
