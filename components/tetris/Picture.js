import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { media } from '../../styleConfigs/breakPoints';
import SubPatternWrap from './common/SubPatternWrap';

const Picture = ({ pictures }) => {
  let colWidth;

  switch (pictures.length) {
    case 1:
      colWidth = {
        xs: 12,
        md: 12,
        lg: 12,
      };

      break;

    case 2:
      colWidth = {
        xs: 12,
        md: 6,
        lg: 6,
      };
      break;

    case 3:
      colWidth = {
        xs: 12,
        md: 12,
        lg: 4,
      };
      break;
    case 4:
      colWidth = {
        xs: 12,
        md: 6,
        lg: 6,
      };
      break;
    default:
      break;
  }

  return (
    <Wrap>
      <Container>
        <Row>
          {pictures.map((picture, index) => (
            <Col
              {...colWidth}
              key={index}>
              <img src={picture} />
            </Col>
          ))}
        </Row>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin: 60px 0;
  padding: 0 20px;
  @media ${media.md} {
    margin: 90px 0;
  }
  @media ${media.lg} {
    margin: 120px 0;
  }
`;

export default Picture;
