import React from 'react';
import withConfigProvider from '../components/hoc/withConfigProvider';
import Footer from '../components/common/Footer';

import { Device, Spec, Feature } from '../components/service';
import { Trailer, PictureFullWidth, Text } from '../components/tetris';

const COLOR_CONFIG = {
  mode: 'light',
  colors: {
    bright: {
      hue: 41,
      saturation: 100,
      lightness: 56,
    },
    dark: {
      hue: 295,
      saturation: 83,
      lightness: 40,
    },
  },
};

const Bridge = () => (
  <>
    <Text
      colorPtnId="a"
      lead=""
      hdline="伝説のバンド＜クイーン＞<br/>その華やかな活躍の裏に隠された真実の物語。"
      paragraph="数々の名曲を生み出し、スターダムを一気に駆け上った伝説のバンド〈クイーン〉。そのヴォーカルにして、“史上最高のエンターテイナー”と讃えられたフレディ・マーキュリーの生き様を映し出す話題作が、早くもU-NEXTで配信スタート。"
    />
    <PictureFullWidth
      srcPc="/static/img/bohemian/top.jpg"
      srcSp="/static/img/bohemian/top.jpg"
      alt="ジョジョのなんとかの冒険"
    />
    <Trailer
      colorPtnId="a"
      texts={{
        hdline: 'オリジナル予告編本日解禁！',
        paragraph: '',
      }}
      video={{
        m3u8:
          'https://streamh01.nxtv.jp/hls03/special/unext_promotion/twd_s9_2_trailer/hls/twd_s9_2_trailer/twd_s9_2_trailer.m3u8',
        mp4:
          'https://streamh01.nxtv.jp/hls03/special/unext_promotion/twd_s9_2_trailer/mp4/twd_s9_2_trailer.mp4',
        webm:
          'https://streamh01.nxtv.jp/hls03/special/unext_promotion/twd_s9_2_trailer/webm/twd_s9_2_trailer.webm',
        poster: '/static/img/bohemian/trailer.jpg',
      }}
    />
    <Text
      colorPtnId="d"
      lead=""
      hdline="ABOUT QEEN <br/>クイーンとは"
      paragraph="数々の名曲を生み出し、スターダムを一気に駆け上った伝説のバンド〈クイーン〉。そのヴォーカルにして、“史上最高のエンターテイナー”と讃えられたフレディ・マーキュリーの生き様を映し出す話題作が、早くもU-NEXTで配信スタート。"
      bgImg="/static/img/bohemian/sunglass.jpg"
    />
    <PictureFullWidth
      srcPc="/static/img/bohemian/bottom.jpg"
      srcSp="/static/img/bohemian/bottom.jpg"
      alt="ジョジョのなんとかの冒険"
    />
    <Feature colorPtnId="a" />
    <Device colorPtnId="a" />
    <Spec colorPtnId="a" />
    <Footer colorPtnId="a" />
  </>
);

export default withConfigProvider(Bridge, COLOR_CONFIG);
