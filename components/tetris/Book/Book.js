import React from 'react';
import styled from 'styled-components';
import device from '../../../styleConfigs/breakPoints';

const Book = ({ img, link, alt }) => (
  <Wrap>
    <Link href={link}>
      <img
        src={`${img}?output-format=jpg&output-quality=60&resize=360:*&letterbox=5:7&bgblur=50,0.5`}
        alt={alt}
      ></img>
    </Link>
  </Wrap>
);

const Wrap = styled.div`
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.2);
`;

const Link = styled.a`
  &:hover {
    filter: brightness(120%);
    opacity: 1;
  }
`;

export default Book;
