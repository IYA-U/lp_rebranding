import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const Switcher = () => (
  <Wrap>
    <Container>
      {[
        {
          name: 'PatternA center',
          path: '/keyvisual?pattern=PatternA&subPattern=center',
        },
        {
          name: 'PatternA left',
          path: '/keyvisual?pattern=PatternA&subPattern=left',
        },
        {
          name: 'PatternA right',
          path: '/keyvisual?pattern=PatternA&subPattern=right',
        },
        {
          name: 'PatternB scroll',
          path: '/keyvisual?pattern=PatternB',
        },
        {
          name: 'Title',
          path: '/keyvisual?pattern=Title&sid=SID0036791',
        },
      ].map((config) => (
        <Row
          style={{ marginTop: '5px' }}
          key={config.name}>
          <Col xs={{ size: 10, offset: 1 }}>
            <a href={config.path}>
              <Button
                size="lg"
                block>
                {config.name}
              </Button>
            </a>
          </Col>
        </Row>
      ))}
    </Container>
  </Wrap>
);

const Wrap = styled.div`
  left: 0px;
  position: relative;
  right: auto;
  top: 80px;
  width: 100%;
`;

const Button = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export default Switcher;
