import React from 'react';
import styled from 'styled-components';
import device from '../../styleConfigs/breakPoints';
import useWindowSize from '../hook/useWindowSize';
import Layout from './Common/Layout';
import InfoBlockText from './Common/infoBlock--text';
import InfoBlock from './Common/infoBlock';

const PatternA = ({ subPattern, bgImg, infoBlock }) => {
  const windowSize = useWindowSize();
  const wrapConfig = {
    backgroundPosition: (() => {
      switch (subPattern) {
        case 'right':
          return 'left';
        case 'left':
          return 'right';
        case 'center':
          return 'center';
        default:
          break;
      }
    })(),
    justifyContent: (() => {
      if (subPattern === 'center') return 'center';
      if (!windowSize.isPc || subPattern === 'right') return 'flex-end';
      if (subPattern === 'left') return 'flex-start';
    })(),
  };

  return (
    <Layout>
      <Wrap
        config={wrapConfig}
        bgImg={bgImg}>
        <MainBlock>
          {windowSize.isPC || subPattern === 'center' ? (
            <InfoBlock
              {...infoBlock}
              colorPtnId="a" />
          ) : (
            <InfoBlockText
              colorPtnId="a"
              {...infoBlock} />
          )}
        </MainBlock>
        {!windowSize.isPC && subPattern !== 'center' && <Gradient />}
      </Wrap>
    </Layout>
  );
};

const Wrap = styled.div`
  background-image: url('${({ bgImg }) => bgImg.sp}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: ${({ config }) => config.justifyContent};
  position: relative;
  @media ${device.TAB} {
    background-image: url('${({ bgImg }) => bgImg.pc}');
    background-position: ${({ config }) => config.backgroundPosition};
    flex-direction: row-reverse; 
  }
  &:after {
    background-color: rgba(0, 0, 0, 0.4);
    content: '';
    display: ${({ theme }) => theme.subPattern === 'center' ? 'block' : 'none'};
    height: 100%;
    position: absolute;
    width: 100%;
  }
`;

const MainBlock = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  padding: 30px;
  position: relative;
  width: 100%;
  z-index: 5;
  @media ${device.TAB} {
    height: 100%;
    width: 50%;
  }
`;

const Gradient = styled.div`
  background: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1)
  );
  bottom: 0;
  height: 40%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export default PatternA;
