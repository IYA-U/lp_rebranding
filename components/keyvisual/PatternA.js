import React, { useContext } from 'react';
import styled from 'styled-components';
import device from '../../styleConfigs/breakPoints';
import Layout from './Common/Layout';
import InfoBlockText from './Common/infoBlock--text';
import InfoBlock from './Common/infoBlock';
import { ConfigContext } from '../hoc/withConfigProvider';

const PatternA = ({ subPattern, bgImg, infoBlock }) => {
  const config = useContext(ConfigContext);
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
      if (!config.device.isPc || subPattern === 'right') return 'flex-end';
      if (subPattern === 'left') return 'flex-start';
    })(),
  };

  return (
    <Layout>
      <Wrap
        config={wrapConfig}
        bgImg={bgImg}>
        <MainBlock>
          {config.device.isPc || subPattern === 'center' ? (
            <InfoBlock {...infoBlock} />
          ) : (
            <InfoBlockText
              colorPtnId="a"
              {...infoBlock} />
          )}
        </MainBlock>
        {!config.device.isPc && subPattern !== 'center' && <Gradient />}
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
  flex-direction: ${({ theme }) => (theme.device.isPc ? 'row' : 'column')};
  height: 100%;
  justify-content: ${({ config }) => config.justifyContent};
  position: relative;
  @media ${device.TAB} {
    background-image: url('${({ bgImg }) => bgImg.pc}');
    background-position: ${({ config }) => config.backgroundPosition};
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
  height: ${({ theme }) => (theme.device.isPc ? '100%' : 'auto')};
  justify-content: center;
  padding: 30px;
  position: relative;
  width: ${({ theme }) => (theme.device.isPc ? '50%' : '100%')};
  z-index: 5;
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
