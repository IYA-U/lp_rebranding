import React from 'react';
import withConfigProvider from '../../hoc/withConfigProvider';
import Footer from '../../components/common/Footer';

import { Device, Spec, Feature } from '../../components/service';
import { Trailer, Text } from '../../components/tetris';

const COLOR_CONFIG = {
  mode: 'light',
  colors: {
    bright: {
      hue: 42,
      saturation: 40,
      lightness: 78,
    },
    dark: {
      hue: 9,
      saturation: 34,
      lightness: 36,
    },
  },
};

const Bridge = () => (
  <>
    <Text
      colorPtnId="a"
      lead=""
      hdline="阪神・淡路大震災。<br>困難に立ち向かった人々の奇跡の74日間"
      paragraph="1995年1月17日、阪神・淡路大震災発生 。大阪から神戸へと東西を繋ぐ要所である”六甲道駅”が路線ごと崩落。過酷な状況下で、わずか74日間で駅を復旧した人々の実話をもとに紡がれる人間ドラマ。"
    />
    <Trailer
      colorPtnId="b"
      texts={{
        hdline: '独占配信の予告編を観る',
        paragraph: '',
      }}
      video={{
        m3u8:
          'https://streamh01.nxtv.jp/hls03/special/unext_promotion/twd_s9_2_trailer/hls/twd_s9_2_trailer/twd_s9_2_trailer.m3u8',
        mp4:
          'https://streamh01.nxtv.jp/hls03/special/unext_promotion/twd_s9_2_trailer/mp4/twd_s9_2_trailer.mp4',
        webm:
          'https://streamh01.nxtv.jp/hls03/special/unext_promotion/twd_s9_2_trailer/webm/twd_s9_2_trailer.webm',
        poster: '/static/img/bridge/trailerfuta@2x.jpg',
      }}
    />
    <Feature colorPtnId="a" />
    <Device colorPtnId="a" />
    <Spec colorPtnId="a" />
    <Footer colorPtnId="a" />
  </>
);

export default withConfigProvider(Bridge, COLOR_CONFIG);
