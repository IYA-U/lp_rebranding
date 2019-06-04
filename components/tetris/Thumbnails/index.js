import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import Thumbnail from './Thumbnail';
import device from '../../../styleConfigs/breakPoints';
import SubPatternWrap from '../common/SubPatternWrap';

const Thumbnails = ({ thumbnails }) => {
  const isOdd = thumbnails.length % 2 > 0;

  return (
    <Container>
      <Wrap>
        <Row>
          {thumbnails.map((thumbnail, index) => (
            <Col
              key={index}
              xs="12"
              md="6"
              lg={isOdd ? 4 : 3}>
              <Thumbnail {...thumbnail} />
            </Col>
          ))}
        </Row>
      </Wrap>
    </Container>
  );
};

const Wrap = styled.div`
  padding: 0 20px;
  @media ${device.TAB} {
    padding: 0 10px;
  }
  @media ${device.PC} {
    padding: 0;
    margin: 0 -10px;
  }
`;

export default Thumbnails;
