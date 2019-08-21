import React, { useContext } from 'react';
import styled from 'styled-components';
import { useSpring, useTrail, animated } from 'react-spring';
import device from '../../../styleConfigs/breakPoints';
import { Config } from '../../Layout/withLayout';

const InfoBlock = () => {
  const ctaAnimation = useSpring({
    delay: 1500,
    to: {
      height: '60px',
      color: 'rgba(255,255,255,1)',
    },
    from: {
      height: '0px',
      color: 'rgba(255,255,255,0)',
    },
  });

  const titles = ['観るのも読むのも', 'U-NEXTひとつ'];

  const titleCoverAnimation1 = useSpring({
    delay: 0,
    to: { width: '0' },
    from: { width: '100%' },
  });
  const titleCoverAnimation2 = useSpring({
    delay: 500,
    to: { width: '0' },
    from: { width: '100%' },
  });

  const textAnimation = useSpring({
    delay: 1500,
    to: {
      color: 'rgba(255,255,255,1)',
    },
    from: { color: 'rgba(255,255,255,0)' },
  });

  const config = useContext(Config);
  return (
    <Wrap>
      <TitleTextArea>
        <TitleText>
          観るのも読むのも
          <TitleTextCover style={titleCoverAnimation1} />
        </TitleText>
        <TitleText>
          U-NEXTひとつ
          <TitleTextCover style={titleCoverAnimation2} />
        </TitleText>
      </TitleTextArea>
      <Text
        dangerouslySetInnerHTML={{
          __html:
            '映画/ドラマ/アニメから、マンガまで。<br/>最新作も見放題も、ぞくぞく配信。',
        }}
        style={textAnimation}
      />
      <Cta style={ctaAnimation}>まずは31日間無料トライアル</Cta>
    </Wrap>
  );
};

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin-top: -1rem;
  max-width: 480px;
  width: 100%;
`;

const TitleTextArea = styled.div`
  width: 100%;
`;

const TitleText = styled.h2`
  color: white;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  line-height: 38px;
  position: relative;
  width: 100%;
  will-change: transform, opacity;
`;

const TitleTextCover = styled(animated.div)`
  right: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 95%);
  z-index: 2;
`;

const Text = styled(animated.p)`
  color: ${({ theme }) => theme.colorConfig.colors.bright};
  font-size: 13px;
  line-height: 1.45;
  margin-top: 10px;
  width: 100%;

  @media ${device.TAB} {
    font-size: 26px;
  }
`;

const Cta = styled(animated.div)`
  align-items: center;
  background-color: ${({ theme }) => theme.colorConfig.colors.bright};
  color: white;
  display: flex;
  font-size: 16px;
  height: 55px;
  justify-content: center;
  margin-top: 15px;
  width: 100%;
  overflow: hidden;
`;

export default InfoBlock;
