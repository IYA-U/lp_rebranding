import React, { useContext } from 'react';
import styled from 'styled-components';
import { Config } from '../../../pages/keyvisual';

const InfoBlock = () => {
  const config = useContext(Config);
  return (
    <Wrap>
      <Text dangerouslySetInnerHTML={{ __html: '充実のライナップ！<br/>何かのテキストが2行' }} />
      <img
        src="/static/img/keyvisual/centerImage/teiichi.png"
        alt="" />
      <Cta>CTAボタン最大文字数17</Cta>
    </Wrap>
  );
};

const Text = styled.p`
  font-size: ${({ theme }) => (theme.device.isPc ? '26px' : '18px')};
  line-height: 1.45;
  color: ${({ theme }) => theme.infoBlockTextColor};
`;

const Wrap = styled.div`
  height: 100%;
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Cta = styled.div`
  margin-top: 20px;
  height: 75px;
  width: calc(100% - 30px);
  background-color: ${({ theme }) => theme.ctaColor};
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default InfoBlock;
