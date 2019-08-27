import React from 'react';
import withConfigProvider from '../../hoc/withConfigProvider';
import KeyVisualPatternA from '../../components/keyvisual/PatternA';
import Footer from '../../components/common/Footer';
import { Device, Spec, Feature } from '../../components/service';
import {
  Trailer,
  Cards,
  PictureFullWidth,
  Text,
} from '../../components/tetris';

const COLOR_CONFIG = {
  mode: 'light',
  colors: {
    bright: {
      hue: 50,
      saturation: 95,
      lightness: 47,
    },
    dark: {
      hue: 267,
      saturation: 100,
      lightness: 33,
    },
  },
};

const Jojo = () => (
  <>
    <KeyVisualPatternA
      bgImg={{
        sp: '/static/img/jojo/sp/eyecatch.jpg',
        pc: '/static/img/jojo/pc/eyecatch.jpg',
      }}
      infoBlock={{
        text: '舞台は2001年のイタリア<br/>今回のジョジョはギャングスター',
      }}
    ></KeyVisualPatternA>

    <Text
      colorPtnId="d"
      hdline="青年ジョルノ・ジョバァーナ、街から麻薬を排除するという夢があった。"
      paragraph="イタリア裏社会を牛耳るギャング組織「パッショーネ」に属する青年ジョルノ・ジョバァーナ。 彼には街に麻薬を流す組織の「ボス」を倒し、街から麻薬を排除するという夢があった。 謎に秘められたボスに近づくため、同じ夢を抱く幹部のブローノ・ブチャラティ率いるチームと共に ボスの娘トリッシュ・ウナの護衛指令を果たしたジョルノたち。 しかしその指令の真の目的は、ボスの正体の手掛かりとなるトリッシュを ボス自らの手で確実に葬ることだった。 "
      bgImg="/static/img/jojo/textBg.jpg"
    />
    <Trailer
      colorPtnId="a"
      texts={{
        hdline: '待望の第5部の予告',
        paragraph: '',
      }}
      video={{
        m3u8:
          'https://streamh01.nxtv.jp/hls03/special/unext_promotion/twd_s9_2_trailer/hls/twd_s9_2_trailer/twd_s9_2_trailer.m3u8',
        mp4:
          'https://streamh01.nxtv.jp/hls03/special/unext_promotion/twd_s9_2_trailer/mp4/twd_s9_2_trailer.mp4',
        webm:
          'https://streamh01.nxtv.jp/hls03/special/unext_promotion/twd_s9_2_trailer/webm/twd_s9_2_trailer.webm',
        poster: '/static/img/jojo/trailerfuta@2x.jpg',
      }}
    />
    <Cards
      colorPtnId="d"
      cards={[
        {
          img: '/static/img/jojo/img_chara01@2x.jpg',
          title: 'ジョルノ・<br />ジョバァーナ',
          paragraph:
            '父親はジョースター家の宿敵DIO自分を救ってくれたギャングに憧れて、街を浄化するために、自身もギャングスターになる決意を抱いてギャング組織「パッショーネ」に入団。',
        },
        {
          img: '/static/img/jojo/img_chara02@2x.jpg',
          title: 'ブローノ・<br />ブチャラティ',
          paragraph:
            'ギャング組織「パッショーネ」のチームリーダーの一人で、ポルポの部下。20歳。おかっぱのように切り揃えた髪に、白地に点が入り多数のジッパーが付いたスーツを着用している。',
        },
        {
          img: '/static/img/jojo/img_chara03@2x.jpg',
          title: 'トリッシュ・<br />ウナ',
          paragraph:
            'パッショーネのボスの娘。1986年4月19日生まれ。15歳。四則演算の記号がプリントされたパレオのような服を着ている。',
        },
        {
          img: '/static/img/jojo/img_chara04@2x.jpg',
          title: 'グイード・<br />ミスタ',
          paragraph:
            'ブチャラティの部下でチームのムードメーカー。18歳。ファッションは網模様の服と縞のズボン、網と丸点模様の帽子。',
        },
      ]}
    />
    <PictureFullWidth
      srcPc="/static/img/jojo/pc/pictures.jpg"
      srcSp="/static/img/jojo/sp/pictures.jpg"
      alt="ジョジョのなんとかの冒険"
    />

    <Feature colorPtnId="a" />
    <Device colorPtnId="a" />
    <Spec colorPtnId="a" />
    <Footer colorPtnId="a" />
  </>
);

export default withConfigProvider(Jojo, COLOR_CONFIG);
