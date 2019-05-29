import styled from 'styled-components';
import device from '../../../styleConfigs/breakPoints';

export const SectionWrap = styled.div`
  background: #ffcc00;
  padding: 60px 0;

  @media ${device.TAB} {
    padding: 85px 0;
  }
  @media ${device.PC} {
    padding: 160px 0;
  }
`;

export const SectionInner = styled.div`
  padding: 0 15px;

  @media ${device.TAB} {
    padding: 0 20px;
  }
  @media ${device.PC} {
    padding: 0;
  }
`;
export const TextSubTitle = styled.h2`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  line-height: 1;
  color: #000000;
  @media ${device.TAB} {
  }
  @media ${device.PC} {
    margin-left: auto;
    margin-right: auto;
    font-size: 26px;
    max-width: 900px;
  }
`;

export const TextTitle = styled.h1`
  margin-top: 20px;
  font-size: 30px;
  text-align: center;
  line-height: 1;
  font-weight: bold;
  color: #000000;
  @media ${device.TAB} {
  }
  @media ${device.PC} {
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    font-size: 44px;
    max-width: 1080px;
  }
`;
