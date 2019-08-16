/*
パッケージimport
*/
import React from 'react';
import { storiesOf } from '@storybook/react';
import '../styleConfigs/globalStyle';
import {
  withKnobs, text, object, select,
} from '@storybook/addon-knobs';

/*
テトリスコンポーネントimport
*/
import Text from '../components/tetris/Text';
import Cards from '../components/tetris/Cards';
import Trailer from '../components/tetris/Trailer';

/*
Story一覧
*/
storiesOf('Text', module)
  .addDecorator(withKnobs)
  .add('標準', () => (
    <Text
      colorPtnId={select(
        '配色パターン',
        {
          a: 'a',
          b: 'b',
          c: 'c',
        },
        'a',
      )}
      hdline={text(
        'hdline',
        '青年ジョルノ・ジョバァーナ、街から麻薬を排除するという夢があった。',
      )}
      paragraph={text(
        'paragraph',
        'イタリア裏社会を牛耳るギャング組織「パッショーネ」に属する青年ジョルノ・ジョバァーナ。 彼には街に麻薬を流す組織の「ボス」を倒し、街から麻薬を排除するという夢があった。 謎に秘められたボスに近づくため、同じ夢を抱く幹部のブローノ・ブチャラティ率いるチームと共に ボスの娘トリッシュ・ウナの護衛指令を果たしたジョルノたち。 しかしその指令の真の目的は、ボスの正体の手掛かりとなるトリッシュを ボス自らの手で確実に葬ることだった。 ',
      )}
    />
  ));

storiesOf('Cards', module)
  .addDecorator(withKnobs)
  .add('標準', () => (
    <Cards
      colorPtnId={select(
        '配色パターン',
        {
          a: 'a',
          b: 'b',
          c: 'c',
          d: 'd',
        },
        'a',
      )}
      cards={object('カード内容', [
        {
          img:
            'https://lprebranding.netlify.com/static/img/jojo/img_chara01@2x.jpg',
          title: 'ジョルノ・<br />ジョバァーナ',
          paragraph:
            '父親はジョースター家の宿敵DIO自分を救ってくれたギャングに憧れて、街を浄化するために、自身もギャングスターになる決意を抱いてギャング組織「パッショーネ」に入団。',
        },
        {
          img:
            'https://lprebranding.netlify.com/static/img/jojo/img_chara02@2x.jpg',
          title: 'ブローノ・<br />ブチャラティ',
          paragraph:
            'ギャング組織「パッショーネ」のチームリーダーの一人で、ポルポの部下。20歳。おかっぱのように切り揃えた髪に、白地に点が入り多数のジッパーが付いたスーツを着用している。',
        },
        {
          img:
            'https://lprebranding.netlify.com/static/img/jojo/img_chara03@2x.jpg',
          title: 'トリッシュ・<br />ウナ',
          paragraph:
            'パッショーネのボスの娘。1986年4月19日生まれ。15歳。四則演算の記号がプリントされたパレオのような服を着ている。',
        },
        {
          img:
            'https://lprebranding.netlify.com/static/img/jojo/img_chara04@2x.jpg',
          title: 'グイード・<br />ミスタ',
          paragraph:
            'ブチャラティの部下でチームのムードメーカー。18歳。ファッションは網模様の服と縞のズボン、網と丸点模様の帽子。',
        },
        {
          img:
            'https://lprebranding.netlify.com/static/img/jojo/img_chara05@2x.jpg',
          title: 'ナランチャ・<br/>ギルガ',
          paragraph:
            'ブチャラティの部下。17歳。小柄な少年で、布をカチューシャのように使って髪型を簡易に作っている。',
        },
        {
          img:
            'https://lprebranding.netlify.com/static/img/jojo/img_chara06@2x.jpg',
          title: 'レオーネ・<br />アバッキオ',
          paragraph:
            'ブチャラティの部下。21歳。銀色の長髪で唇に薄紫色のルージュを引いた男。元は正義感溢れる警察官だったが、腐敗した社会に失望、自らも収賄などの悪事に手を染めるようになる。',
        },
        {
          img:
            'https://lprebranding.netlify.com/static/img/jojo/img_chara07@2x.jpg',
          title: 'パンナコッタ・<br />フーゴ',
          paragraph:
            'ブチャラティの部下でチームのブレーン。1985年生まれの16歳。無数の大穴の空いた服と、イチゴ柄のネクタイを着用している。',
        },
        {
          img:
            'https://lprebranding.netlify.com/static/img/jojo/img_chara01@2x.jpg',
          title: 'パンナコッタ・<br />フーゴ',
          paragraph:
            'ブチャラティの部下でチームのブレーン。1985年生まれの16歳。無数の大穴の空いた服と、イチゴ柄のネクタイを着用している。',
        },
      ])}
    />
  ));

storiesOf('Trailer', module)
  .addDecorator(withKnobs)
  .add('標準', () => (
    <Trailer
      colorPtnId={select(
        '配色パターン',
        {
          a: 'a',
          b: 'b',
          c: 'c',
        },
        'a',
      )}
      texts={object('テキスト', {
        hdline: '待望の第5部の予告',
        paragraph: '',
      })}
      video={object('ビデオソース', {
        m3u8:
          'https://streamh01.nxtv.jp/hls03/special/unext_promotion/twd_s9_2_trailer/hls/twd_s9_2_trailer/twd_s9_2_trailer.m3u8',
        mp4:
          'https://streamh01.nxtv.jp/hls03/special/unext_promotion/twd_s9_2_trailer/mp4/twd_s9_2_trailer.mp4',
        webm:
          'https://streamh01.nxtv.jp/hls03/special/unext_promotion/twd_s9_2_trailer/webm/twd_s9_2_trailer.webm',
        poster:
          'https://lprebranding.netlify.com/static/img/jojo/trailerfuta@2x.jpg',
      })}
    />
  ));
