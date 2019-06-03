import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Thumbnail from './Thumbnail';
import device from '../../../styleConfigs/breakPoints';
import SubPatternWrap from '../common/SubPatternWrap';

const Thumbnails = ({ thumbnails }) => {
  const isOdd = thumbnails.length % 2 > 0;

  return (
    <Container>
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
    </Container>
  );
};

export default Thumbnails;
