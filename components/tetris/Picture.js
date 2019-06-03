import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import device from '../../styleConfigs/breakPoints';
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
          {pictures.map((picture) => (
            <Col {...colWidth}>
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
  @media ${device.TAB} {
    margin: 90px 0;
  }
  @media ${device.PC} {
    margin: 120px 0;
  }
`;

export default Picture;