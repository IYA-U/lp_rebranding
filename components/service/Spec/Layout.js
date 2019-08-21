import styled from 'styled-components';
import device from '../../../styleConfigs/breakPoints';

export const Wrap = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding-bottom: 60px;
  width: 100%;
  @media ${device.TAB} {
    padding-bottom: 120px;
  }
`;

export const SpecBody = styled.div`
  width: 100%;
  @media ${device.TAB} {
    max-width: 1152px;
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.title};
  font-size: 32px;
  line-height: 1.4;
  padding: 45px 30px;
  @media ${device.TAB} {
    font-size: 36px;
    display: block;
    text-align: center;
    padding: 120px 0;
  }
`;

export const Br = styled.br`
  @media ${device.TAB} {
    display: none;
  }
`;

export const SpecWrap = styled.ul`
  margin: 0rem auto 0 auto;
  padding: 0;
`;

export const DefaultWrap = styled.div`
  & > ul {
    & > li:nth-child(n + 6) {
      display: none;
      @media ${device.TAB} {
        display: block;
      }
    }
  }
`;

export const MoreWrap = styled.div`
  & > ul {
    @media ${device.TAB} {
      display: none;
    }
    & > li:nth-child(-n + 5) {
      display: none;
    }
  }
`;

export const TogglerWrap = styled.div`
  display: block;
  font-weight: bold;
  margin: 2.4rem auto 0 auto;
  text-align: center;
  & > p {
    border-bottom: 2px solid #505050;
    display: inline-block;
    line-height: 1.4rem;
    padding-bottom: 0.4rem;
    padding-left: 0.4rem;
    position: relative;
  }
  @media ${device.TAB} {
    display: none;
  }
`;

export const Arrow = styled.span`
  background-color: #505050;
  bottom: auto;
  display: inline-block;
  height: 2px;
  left: auto;
  margin-left: 1.4rem;
  margin-right: 0.4rem;
  position: relative;
  right: 0;
  top: -0.5rem;
  width: 12px;
  &::after {
    background-color: #505050;
    bottom: 0;
    content: '';
    display: block;
    height: 12px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 2px;
  }
`;
