import React from 'react';
import Link from 'next/link';
import {
  Button, Container, Row, Col,
} from 'reactstrap';
import styled from 'styled-components';

const Switcher = () => (
  <Wrap>
    <Container>
      {['PatternA', 'PatternB', 'Title'].map((name) => {
        let path = `/keyvisual?pattern=${name}`;
        if (name === 'Title') {
          path += '&sid=SID0003692';
        }

        return (
          <Row style={{ marginTop: '5px' }}>
            <Col xs={{ size: 10, offset: 1 }}>
              <a href={path}>
                <Button
                  size="lg"
                  block>
                  {name}
                </Button>
              </a>
            </Col>
          </Row>
        );
      })}
    </Container>
  </Wrap>
);

const Wrap = styled.div`
  position: relative;
`;

export default Switcher;
