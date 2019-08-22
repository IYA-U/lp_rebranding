import React from 'react';
import withConfigProvider from '../components/hoc/withConfigProvider';
import KeyVisualPatternA from '../components/keyvisual/PatternA';
import Footer from '../components/common/Footer';
import { Device, Spec, Feature } from '../components/service';
import {
  Trailer, Cards, PictureFullWidth, Text,
} from '../components/tetris';

const COLOR_CONFIG = {
  mode: 'dark',
  colors: {
    bright: {
      hue: 193,
      saturation: 67,
      lightness: 53,
    },
    dark: {
      hue: 210,
      saturation: 100,
      lightness: 19,
    },
  },
};

const DarkKnight = () => (
  <>
    <KeyVisualPatternA
      bgImg={{
        sp: '/static/img/darkKnight/eyecatch_sp.jpg',
        pc: '/static/img/darkKnight/eyecatch.jpg',
      }}
      infoBlock={{
        text: 'コウモリが世界を救う<br/>抱腹絶倒のアニマルコメディー',
      }}
    ></KeyVisualPatternA>
    <Text
      colorPtnId="a"
      hdline="公開から10年が経った現在も、ヒーロー映画のベンチマークであり続けています。"
      paragraph="クリストファー・ノーラン監督の陰鬱なバットマンシリーズの2作目となったこの映画は、疑心暗鬼や倫理的な行き詰まりに溢れ、ポスト「9.11」（ニューヨークで起こったテロ事件）初の超大作映画と称賛されました。長い映画史のなかで初めて、ヒーロー映画が真剣に受け止められたのです。 "
    />
    <PictureFullWidth
      srcPc="/static/img/darkKnight/bike.jpg"
      srcSp="/static/img/darkKnight/bike.jpg"
      alt="ジョジョのなんとかの冒険"
    />
    <Trailer
      colorPtnId="b"
      texts={{
        hdline: '再びこの陰鬱な予告編を',
        paragraph: '',
      }}
      video={{
        m3u8:
          'https://streamh01.nxtv.jp/hls03/special/unext_promotion/twd_s9_2_trailer/hls/twd_s9_2_trailer/twd_s9_2_trailer.m3u8',
        mp4:
          'https://streamh01.nxtv.jp/hls03/special/unext_promotion/twd_s9_2_trailer/mp4/twd_s9_2_trailer.mp4',
        webm:
          'https://streamh01.nxtv.jp/hls03/special/unext_promotion/twd_s9_2_trailer/webm/twd_s9_2_trailer.webm',
        poster: '/static/img/darkKnight/trailer.jpg',
      }}
    />
    <Cards
      colorPtnId="a"
      cards={[
        {
          img:
            'http://imgc.nxtv.jp/img/info/tit/00003/SID0003944.png?output-format=jpeg&output-quality=60&resize=500:500',
          title: 'ジョルノ・<br />ジョバァーナ',
          paragraph:
            '父親はジョースター家の宿敵DIO自分を救ってくれたギャングに憧れて、街を浄化するために、自身もギャングスターになる決意を抱いてギャング組織「パッショーネ」に入団。',
        },
        {
          img:
            'http://imgc.nxtv.jp/img/info/tit/00003/SID0003944.png?output-format=jpeg&output-quality=60&resize=500:500',
          title: 'ブローノ・<br />ブチャラティ',
          paragraph:
            'ギャング組織「パッショーネ」のチームリーダーの一人で、ポルポの部下。20歳。おかっぱのように切り揃えた髪に、白地に点が入り多数のジッパーが付いたスーツを着用している。',
        },
        {
          img:
            'http://imgc.nxtv.jp/img/info/tit/00003/SID0003944.png?output-format=jpeg&output-quality=60&resize=500:500',
          title: 'トリッシュ・<br />ウナ',
          paragraph:
            'パッショーネのボスの娘。1986年4月19日生まれ。15歳。四則演算の記号がプリントされたパレオのような服を着ている。',
        },
        {
          img:
            'http://imgc.nxtv.jp/img/info/tit/00003/SID0003944.png?output-format=jpeg&output-quality=60&resize=500:500',
          title: 'グイード・<br />ミスタ',
          paragraph:
            'ブチャラティの部下でチームのムードメーカー。18歳。ファッションは網模様の服と縞のズボン、網と丸点模様の帽子。',
        },
      ]}
    />
    <PictureFullWidth
      srcPc="/static/img/darkKnight/pictures.jpg"
      srcSp="/static/img/darkKnight/pictures.jpg"
      alt="ジョジョのなんとかの冒険"
    />
    <Feature colorPtnId="a" />
    <Device colorPtnId="a" />
    <Spec colorPtnId="a" />
    <Footer colorPtnId="a" />
  </>
);

export default withConfigProvider(DarkKnight, COLOR_CONFIG);
