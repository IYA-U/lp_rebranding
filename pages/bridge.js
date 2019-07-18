import React from 'react';
import withLayout from '../components/Layout/withLayout';
import KeyvisualLayout from '../components/keyvisual/Common/Layout';
import KeyvisualPatternA from '../components/keyvisual/PatternA';
import Thumbnails from '../components/tetris/Thumbnails';
import Trailer from '../components/tetris/Trailer';
import PictureFullWidth from '../components/tetris/PictureFullWidth';
import Text from '../components/tetris/Text';
import Device from '../components/service/Device';
import Spec from '../components/service/Spec';
import Titles from '../components/service/Titles';
import Trial from '../components/service/Trial';
import Faq from '../components/service/Faq';
import Feature from '../components/service/Feature';
import Footer from '../components/common/Footer';

const bridge = () => (
  <>
    <KeyvisualLayout>
      <KeyvisualPatternA />
    </KeyvisualLayout>
    <Text
      lead=""
      hdline="阪神・淡路大震災。<br>困難に立ち向かった人々の奇跡の74日間"
      paragraph="1995年1月17日、阪神・淡路大震災発生 。大阪から神戸へと東西を繋ぐ要所である”六甲道駅”が路線ごと崩落。過酷な状況下で、わずか74日間で駅を復旧した人々の実話をもとに紡がれる人間ドラマ。"
    />
    <Trailer
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

    <Thumbnails
      title="「BRIDGE」の世界を広げる物語を独占配信！"
      thumbnails={[
        {
          text: 'ディレクターズカット版',
          thumbnail:
            '//imgc.nxtv.jp/img/info/tit/00038/SID0038568.png?output-format=webp&output-quality=60',
          sid: 'SID0038568',
        },
        {
          text: '葵わかな主演、阪神・淡路大震災で繋がる愛の物語',
          thumbnail:
            '//imgc.nxtv.jp/img/info/tit/00038/SID0038569.png?output-format=jpeg&output-quality=60',
          sid: 'SID0038569',
        },
        {
          text: '佐藤隆太主演、阪神・淡路大震災を乗り越えた家族の絆の物語',
          thumbnail:
            '//imgc.nxtv.jp/img/info/tit/00038/SID0038570.png?output-format=jpeg&output-quality=60',
          sid: 'SID0038570',
        },
        {
          text:
            '阪神淡路大震災で実際に起きた出来事をもとに描くドラマのメイキング',
          thumbnail:
            '//imgc.nxtv.jp/img/info/tit/00038/SID0038627.png?output-format=jpeg&output-quality=60',
          sid: 'SID0038627',
        },
      ]}
    />
    <PictureFullWidth
      srcPc="/static/img/bridge/pc/pictures@2x.jpg"
      srcSp="/static/img/bridge/sp/pictures.jpg"
      alt="ジョジョのなんとかの冒険"
    />
    <Feature />
    <Device />
    <Spec />
    <Titles />
    <Trial />
    <Faq />
    <Footer />
  </>
);

export default withLayout(bridge);
