import React from 'react';
import styled from 'styled-components';
import withColorProps from '../../hoc/withColorProps';
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

const InfoBlock = ({ text }) => (
  <Wrap>
    <Text
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
    <img
      src="/static/img/keyvisual/centerImage/teiichi.png"
      alt="" />
    <Cta>CTAボタン最大文字数17</Cta>
  </Wrap>
);

const Text = styled.p`
  color: white;
  font-size: 18px;
  line-height: 1.45;
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
  margin-top: 20px;
  width: calc(100% - 30px);
`;

export default withColorProps(InfoBlock, COLOR_MAP);
