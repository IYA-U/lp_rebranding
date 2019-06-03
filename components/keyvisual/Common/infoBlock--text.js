import React, { useContext } from 'react';
import styled from 'styled-components';
import { Config } from '../../../pages/keyvisual';

const InfoBlock = () => {
  const config = useContext(Config);
  return (
    <Wrap>
      <TitleText dangerouslySetInnerHTML={{ __html: '観る、読む、全部' }} />
      <Text dangerouslySetInnerHTML={{ __html: '充実のライナップ！<br/>何かのテキストが2行' }} />
      <Cta>CTAボタン最大文字数17</Cta>
    </Wrap>
  );
};

const Text = styled.p`
  color: ${({ theme }) => theme.infoBlockTextColor};
  font-size: ${({ theme }) => (theme.device.isPc ? '26px' : '18px')};
  line-height: 1.45;
  margin-top: 0.5rem;
  text-align: center;
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
  background-color: ${({ theme }) => theme.ctaColor};
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
  color: ${({ theme }) => theme.infoBlockTextColor};
  font-size: 3rem;
  line-height: 1.4;
  margin-top: 0.5rem;
  text-align: center;
`;

export default InfoBlock;
