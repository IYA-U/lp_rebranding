import React, { useContext } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import device from '../../../styleConfigs/breakPoints';
import { Config } from '../../Layout/withLayout';

const InfoBlock = () => {
  const ctaAnimation = useSpring({
    delay: 1000,
    to: {
      height: '75px',
      color: 'rgba(255,255,255,1)',
    },
    from: { height: '0px', color: 'rgba(255,255,255,0)' },
  });

  const textAnimation = useSpring({
    delay: 1000,
    to: {
      color: 'rgba(255,255,255,1)',
    },
    from: { color: 'rgba(255,255,255,0)' },
  });

  const config = useContext(Config);
  return (
    <Wrap>
      <TitleText
        dangerouslySetInnerHTML={{
          __html: '観るのも読むのも<br/>U-NEXTひとつ',
        }}
      />
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

const TitleText = styled.div`
  color: white;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  line-height: 1.35;
  margin-top: 0.5rem;
  width: 100%;
`;

const Text = styled(animated.p)`
  color: ${({ theme }) => theme.colors.primary};
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
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  font-size: 16px;
  height: 75px;
  justify-content: center;
  margin-top: 15px;
  width: 100%;
`;

export default InfoBlock;
