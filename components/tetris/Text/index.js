import React from 'react';
import styled from 'styled-components';
import withColorsProp from '../../../hoc/withColorProps';
import { media } from '../../../styleConfigs/breakPoints';
import COLOR_MAPS from './COLOR_MAPS';

const Text = ({ hdline, paragraph, bgImg }) => (
  <Wrap bgImg={bgImg}>
    <BgColor>
      {hdline && <Hdline dangerouslySetInnerHTML={{ __html: hdline }} />}
      {paragraph && (
        <Paragraph dangerouslySetInnerHTML={{ __html: paragraph }} />
      )}
    </BgColor>
  </Wrap>
);
const Hdline = styled.h2`
  color: ${({ theme }) => theme.hdline};
  font-size: 28px;
  font-weight: bold;
  line-height: 1.4;
  margin: 0 auto;
  text-align: left;

  @media ${media.md} {
    font-size: 32px;
    text-align: center;
  }
  @media ${media.lg} {
    font-size: 44px;
  }
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.paragraph};
  font-size: 16px;
  margin: 40px auto 0 auto;
  text-align: justify;
  @media ${media.md} {
    margin: 40px auto 0 auto;
    max-width: 640px;
  }
  @media ${media.lg} {
    margin: 80px auto 0 auto;
    max-width: 640px;
  }
`;

const BgColor = styled.div`
  background-color: ${({ theme }) => theme.background};
  opacity: ${({ theme }) => theme.background};
  opacity: 1;
  padding: 45px 20px 80px;
  @media ${media.lg} {
    padding: 300px 0 300px;
  }
`;

const Wrap = styled.div`
  background: ${({ bgImg }) => (bgImg ? `url('${bgImg}')` : 'none')};
`;

export default withColorsProp(Text, COLOR_MAPS);
