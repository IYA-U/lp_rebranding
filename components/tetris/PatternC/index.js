import React from 'react';
import { Container } from 'reactstrap';
import SubPatternWrap from '../common/SubPatternWrap';
import {
  SectionWrap, TextSubTitle, TextTitle, SectionInner,
} from './Layout';
import CardWrap from './CardWrap';
import Thumbnail4 from './Thumbnail4';
import Thumbnail7 from './Thumbnail7';

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
    <SubPatternWrap name="C-2thumbnail4">
      <SectionWrap>
        <Container>
          <SectionInner>
            <TextSubTitle>過去作をもっと楽しむために！</TextSubTitle>
            <TextTitle>スターウォーズ過去作を一気観しよう！</TextTitle>
          </SectionInner>
        </Container>
        <Thumbnail4 />
      </SectionWrap>
    </SubPatternWrap>
    <SubPatternWrap name="C-2thumbnail7">
      <SectionWrap>
        <Container>
          <SectionInner>
            <TextSubTitle>過去作をもっと楽しむために！</TextSubTitle>
            <TextTitle>スターウォーズ過去作を一気観しよう！</TextTitle>
          </SectionInner>
        </Container>
        <Thumbnail7 />
      </SectionWrap>
    </SubPatternWrap>
  </>
);

export default PatternC;
