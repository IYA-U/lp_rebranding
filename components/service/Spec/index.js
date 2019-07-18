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
  Br,
} from './Layout';

const Spec = () => (
  <>
    <Container>
      <Row>
        <Col xs="12">
          <SpecBody>
            <Title>
              サービススペックと<Br></Br>利用料金
            </Title>
            <DefaultWrap>
              <SpecWrap>
                {constants.map((list, index) => (
                  <Sl
                    data={list}
                    key={index} />
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
                    {constants.map((list, index) => (
                      <Sl
                        data={list}
                        key={index} />
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
export default Spec;
