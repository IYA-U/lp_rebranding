import React from 'react';
import { Container } from 'reactstrap';
import SubPatternWrap from '../common/SubPatternWrap';
import {
  SectionWrap, TextSubTitle, TextTitle, SectionInner,
} from './Layout';
import CardWrap from './CardWrap';

const PatternC = () => (
  <>
    <SubPatternWrap name="C-1">
      <SectionWrap>
        <Container>
          <SectionInner>
            <TextSubTitle>過去作をもっと楽しむために！</TextSubTitle>
            <TextTitle>スターウォーズ過去作を一気観しよう！</TextTitle>
          </SectionInner>
        </Container>
        <CardWrap />
      </SectionWrap>
    </SubPatternWrap>
  </>
);

export default PatternC;
