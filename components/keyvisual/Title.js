import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

export const Config = React.createContext();

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stageData: null,
    };
  }

  getTitleStageData = () => {
    const params = new URLSearchParams(window.location.search);
    const sid = params.get('sid');

    const body = {
      common: {
        userInfo: {
          userToken: '',
          pfid: '',
          securityToken: '',
        },
        deviceInfo: {
          deviceType: '700',
          appVersion: '1',
        },
      },
      data: { title_code: sid },
    };

    return fetch('https://napi.unext.jp/1/cmsuser/stage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': window.navigator.userAgent,
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.status !== 200) {
          console.log('APIがエラー返してきた');
          throw new Error();
        }
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getTitleStageData().then((res) => {
      this.setState({
        stageData: res.data,
      });
    });
  }

  render() {
    const { stageData } = this.state;
    const wrapConfig = {
      image: stageData ? stageData.thumbnail.tspt_fwxga : null,
    };

    return (
      <>
        <Config.Provider value={this.state}>
          <ThemeProvider theme={this.state}>
            <Wrap config={wrapConfig}>
              <MainBlock>
                <ImageWrap>
                  <img
                    src={`//${
                      stageData ? stageData.thumbnail.tspt_fwxga : null
                    }`}
                  />
                  <Play src="/static/img/keyvisual/play.png" />
                </ImageWrap>
                <InfoWrap>
                  {stageData && (
                    <>
                      <TitleText>{stageData && stageData.title_name}</TitleText>
                      <Catch>{stageData && stageData.catchphrase}</Catch>
                      <Badge>2016年 ｜ アメリカ ｜ 324円</Badge>
                      <Cta>無料トライアルで今すぐ見る</Cta>
                    </>
                  )}
                </InfoWrap>
              </MainBlock>
            </Wrap>
          </ThemeProvider>
        </Config.Provider>
      </>
    );
  }
}

const Wrap = styled.div`
  align-items: center;
  background-image: ${({ config }) => `url(//${config.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;

  &:before {
    background: inherit;
    background-position: center;
    background-size: cover;
    bottom: -20px;
    content: '';
    filter: blur(12px) brightness(0.4);
    left: -20px;
    overflow: hidden;
    position: absolute;
    right: -20px;
    top: -20px;
    z-index: 1;
  }
`;

const MainBlock = styled.div`
  background-color: ${({ theme }) => theme.device.isPc ? '#192330' : 'transparent'};
  display: ${({ theme }) => (theme.device.isPc ? 'flex' : 'block')};
  flex-direction: ${({ theme }) => theme.device.isPc ? 'row-reverse' : 'column'};
  height: auto;
  justify-content: center;
  margin-top: ${({ theme }) => (theme.device.isPc ? '0px' : '65px')};
  padding: ${({ theme }) => (theme.device.isPc ? '0px' : '15px')};
  position: relative;
  width: ${({ theme }) => (theme.device.isPc ? '90%' : '100%')};
  z-index: 5;
`;

const ImageWrap = styled.div`
  background-color: green;
  min-width: ${({ theme }) => (theme.device.isPc ? '500px' : '0')};
  position: relative;
  width: ${({ theme }) => (theme.device.isPc ? '70%' : '100%')};
`;

const TitleText = styled.h1`
  font-size: ${({ theme }) => (theme.device.isPc ? '45px' : '20px')};
  font-weight: bold;
  letter-spacing: 0.03em;
  line-height: 1.4;
  margin-top: ${({ theme }) => (theme.device.isPc ? '0' : '20px')};
  text-align: ${({ theme }) => (theme.device.isPc ? 'left' : 'left')};
  width: ${({ theme }) => (theme.device.isPc ? '100%' : '100%')};
`;

const InfoWrap = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => (theme.device.isPc ? '30px' : '0')};
  width: ${({ theme }) => (theme.device.isPc ? '30%' : '100%')};
`;

const Catch = styled.p`
  font-size: ${({ theme }) => (theme.device.isPc ? '22px' : '14px')};
  line-height: 1.5;
  margin-top: 10px;
  width: 100%;
`;

const Badge = styled.p`
  font-size: 12px;
  text-align: left;
  width: 100%;
`;

const Cta = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.ctaColor};
  color: white;
  display: flex;
  font-size: 16px;
  height: 50px;
  justify-content: center;
  margin-top: 15px;
  width: calc(100%);
`;

const Play = styled.img`
  height: 45px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 45px;
`;

export default Title;
