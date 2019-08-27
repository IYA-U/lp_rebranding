import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

import COLOR_MAPS from './COLOR_MAPS';
import withColorPropsWithMap from '../../../hoc/withColorProps';
import device from '../../../styleConfigs/breakPoints';
import SubPatternWrap from '../common/SubPatternWrap';
import Video from './Video';

const Trailer = ({ texts, video }) => {
  if (texts) {
    return (
      <BackGround>
        <Container>
          <WrapText>
            <TextArea>
              {texts.hdline && <HdlineText>{texts.hdline}</HdlineText>}
              {texts.paragraph && <Text>{texts.paragraph}</Text>}
            </TextArea>
            <VideoWrapText>
              <Video {...video} />
            </VideoWrapText>
          </WrapText>
        </Container>
      </BackGround>
    );
  }
  return (
    <BackGround>
      <Container>
        <Wrap>
          <Video {...video} />
        </Wrap>
      </Container>
    </BackGround>
  );
};

const BackGround = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 100%;
`;

const Wrap = styled.div`
  padding: 40px 20px;
  @media ${device.PC} {
    padding: 60px 0;
  }
`;

const WrapText = styled.div`
  padding: 90px 20px;
  @media ${device.PC} {
    padding: 190px 0;
  }
`;

const VideoWrapText = styled.div`
  margin-top: 20px;
  @media ${device.PC} {
    margin-top: 0;
    max-width: 1200px;
  }
`;

const HdlineText = styled.h2`
  color: ${({ theme }) => theme.hdline};
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
  @media ${device.TAB} {
    font-size: 45px;
    margin-bottom: 60px;
  }
`;

const TextArea = styled.div``;

const Text = styled.p``;

export default withColorPropsWithMap(Trailer, COLOR_MAPS);
