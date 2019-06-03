import React, { useContext } from 'react';
import styled from 'styled-components';
import InfoBlockText from './Common/infoBlock--text';
import InfoBlock from './Common/infoBlock';

import { Config } from '../../pages/keyvisual';

const patternA = () => {
  const config = useContext(Config);
  const wrapConfig = {
    backgroundImage: `url(/static/img/keyvisual/main/${
      config.device.isPc ? 'pc' : 'sp'
    }/${config.mainImg})`,
    backgroundPosition: (() => {
      if (!config.device.isPc) return 'center';
      switch (config.subPattern) {
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
      const { subPattern } = config;
      if (subPattern === 'center') return 'center';
      if (!config.device.isPc || subPattern === 'right') return 'flex-end';
      if (subPattern === 'left') return 'flex-start';
    })(),
  };

  return (
    <>
      <Wrap config={wrapConfig}>
        <MainBlock>
          {config.device.isPc || config.subPattern === 'center' ? (
            <InfoBlock />
          ) : (
            <InfoBlockText />
          )}
        </MainBlock>
        {!config.device.isPc && config.subPattern !== 'center' && <Gradient />}
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  background-image: ${({ config }) => config.backgroundImage};
  background-position: ${({ config }) => config.backgroundPosition};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: ${({ theme }) => (theme.device.isPc ? 'row' : 'column')};
  height: 100%;
  justify-content: ${({ config }) => config.justifyContent};
  position: relative;
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
  background-color: skyblue;
  bottom: 0;
  height: 40%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export default patternA;
