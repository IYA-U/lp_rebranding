import React from 'react';
import styled from 'styled-components';
import {
  Container, Row, Col, UncontrolledCollapse,
} from 'reactstrap';
import constants from './constants';
import Sl from './Sl';
import {
  SpecBody,
  Title,
  SpecWrap,
  DefaultWrap,
  MoreWrap,
  TogglerWrap,
  Arrow,
} from './Layout';

const Spec = () => {
  console.log('WIP');

  return (
    <>
      <Container>
        <Row>
          <Col xs="12">
            <SpecBody>
              <Title>サービススペックと利用料金</Title>
              <DefaultWrap>
                <SpecWrap>
                  {constants.map((list) => (
                    <Sl data={list} />
                  ))}
                </SpecWrap>
              </DefaultWrap>
              {/* ▼スマホのみ表示 accordion */}
              <TogglerWrap>
                <p id="toggler">
                  もっと見る<Arrow></Arrow>
                </p>
                <UncontrolledCollapse toggler="#toggler">
                  <MoreWrap>
                    <SpecWrap>
                      {constants.map((list) => (
                        <Sl data={list} />
                      ))}
                    </SpecWrap>
                  </MoreWrap>
                </UncontrolledCollapse>
              </TogglerWrap>
              {/* ▲スマホのみ表示 accordion */}
            </SpecBody>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Spec;
