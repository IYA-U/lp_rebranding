import React from 'react';
import styled from 'styled-components';
import withColorProps from '../../../hoc/withColorProps';
import device from '../../../styleConfigs/breakPoints';

const COLOR_MAP = {
  light: {
    a: {
      cta: 'dark',
    },
  },
  dark: {
    a: {
      cta: 'bright',
    },
  },
};

const InfoBlock = ({ title, text }) => (
  <Wrap>
    <TitleText dangerouslySetInnerHTML={{ __html: title }} />
    <Text
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
    <Cta>まずは３１日間無料体験</Cta>
  </Wrap>
);

const Text = styled.p`
  color: white;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.45;
  margin-top: 0.5rem;
  text-align: center;
  @media ${device.TAB} {
    font-size: 26px;
  }
`;

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

const Cta = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.cta};
  color: white;
  display: flex;
  font-size: 16px;
  height: 75px;
  justify-content: center;
  margin-bottom: -1rem;
  margin-top: 20px;
  width: calc(100% - 30px);
`;

const TitleText = styled.div`
  color: white;
  font-size: 3rem;
  line-height: 1.4;
  margin-top: 0.5rem;
  text-align: center;
`;

export default withColorProps(InfoBlock, COLOR_MAP);
