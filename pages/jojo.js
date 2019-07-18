import React from 'react';
import withLayout from '../components/Layout/withLayout';
import Thumbnails from '../components/tetris/Thumbnails';
import Trailer from '../components/tetris/Trailer';
import Cards from '../components/tetris/Cards';
import Picture from '../components/tetris/Picture';
import Text from '../components/tetris/Text';

const Jojo = () => (
  <div>
    <Text
      lead=""
      hdline="青年ジョルノ・ジョバァーナ、街から麻薬を排除するという夢があった。"
      paragraph="イタリア裏社会を牛耳るギャング組織「パッショーネ」に属する青年ジョルノ・ジョバァーナ。 彼には街に麻薬を流す組織の「ボス」を倒し、街から麻薬を排除するという夢があった。 謎に秘められたボスに近づくため、同じ夢を抱く幹部のブローノ・ブチャラティ率いるチームと共に ボスの娘トリッシュ・ウナの護衛指令を果たしたジョルノたち。 しかしその指令の真の目的は、ボスの正体の手掛かりとなるトリッシュを ボス自らの手で確実に葬ることだった。 "
    />
    <Trailer
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
        poster: '/static/img/twdVideoThumb.jpg',
      }}
    />
    <Cards
      cards={[
        {
          img: '/static/img/legalhigh.jpg',
          title: 'ジョルノ・<br />ジョバァーナ',
          paragraph:
            '父親はジョースター家の宿敵DIO自分を救ってくれたギャングに憧れて、街を浄化するために、自身もギャングスターになる決意を抱いてギャング組織「パッショーネ」に入団。',
        },
        {
          img: '/static/img/legalhigh.jpg',
          title: 'ブローノ・<br />ブチャラティ',
          paragraph:
            'ギャング組織「パッショーネ」のチームリーダーの一人で、ポルポの部下。20歳。おかっぱのように切り揃えた髪に、白地に点が入り多数のジッパーが付いたスーツを着用している。',
        },
        {
          img: '/static/img/legalhigh.jpg',
          title: 'トリッシュ・<br />ウナ',
          paragraph:
            'パッショーネのボスの娘。1986年4月19日生まれ。15歳。四則演算の記号がプリントされたパレオのような服を着ている。',
        },
        {
          img: '/static/img/legalhigh.jpg',
          title: 'グイード・<br />ミスタ',
          paragraph:
            'ブチャラティの部下でチームのムードメーカー。18歳。ファッションは網模様の服と縞のズボン、網と丸点模様の帽子。',
        },
        {
          img: '/static/img/legalhigh.jpg',
          title: 'ナランチャ・<br/>ギルガ',
          paragraph:
            'ブチャラティの部下。17歳。小柄な少年で、布をカチューシャのように使って髪型を簡易に作っている。',
        },
        {
          img: '/static/img/legalhigh.jpg',
          title: 'レオーネ・<br />アバッキオ',
          paragraph:
            'ブチャラティの部下。21歳。銀色の長髪で唇に薄紫色のルージュを引いた男。元は正義感溢れる警察官だったが、腐敗した社会に失望、自らも収賄などの悪事に手を染めるようになる。',
        },
        {
          img: '/static/img/legalhigh.jpg',
          title: 'パンナコッタ・<br />フーゴ',
          paragraph:
            'ブチャラティの部下でチームのブレーン。1985年生まれの16歳。無数の大穴の空いた服と、イチゴ柄のネクタイを着用している。',
        },
        {
          img: '/static/img/legalhigh.jpg',
          title: 'パンナコッタ・<br />フーゴ',
          paragraph:
            'ブチャラティの部下でチームのブレーン。1985年生まれの16歳。無数の大穴の空いた服と、イチゴ柄のネクタイを着用している。',
        },
      ]}
    />
    <Thumbnails
      title="今までのジョジョ作品は、<br />ここにある"
      thumbnails={[
        {
          text: 'ジョジョの奇妙な冒険',
          thumbnail:
            '//imgc.nxtv.jp/img/info/tit/00013/SID0013083.png?output-format=webp&output-quality=60',
          sid: 'SID0013083',
        },
        {
          text: 'ジョジョの奇妙な冒険 スターダストクルセイダース',
          thumbnail:
            '//imgc.nxtv.jp/img/info/tit/00013/SID0013084.png?output-format=jpeg&output-quality=60',
          sid: 'SID0013084',
        },
        {
          text: 'ジョジョの奇妙な冒険 スターダストクルセイダース エジプト編',
          thumbnail:
            '//imgc.nxtv.jp/img/info/tit/00012/SID0012529.png?output-format=jpeg&output-quality=60',
          sid: 'SID0012529',
        },
        {
          text: 'ジョジョの奇妙な冒険 ダイヤモンドは砕けない',
          thumbnail:
            '//imgc.nxtv.jp/img/info/tit/00023/SID0023540.png?output-format=jpeg&output-quality=60',
          sid: 'SID0023540',
        },
        {
          text: 'ジョジョの奇妙な冒険 ダイヤモンドは砕けない 第一章',
          thumbnail:
            '//imgc.nxtv.jp/img/info/tit/00033/SID0033217.png?output-format=jpeg&output-quality=60',
          sid: 'SID0033217',
        },
      ]}
    />
    <Picture
      pictures={[
        'https://imgc.nxtv.jp/img/info/titspot/00019/SID0019592_fwxga.png?output-format=jpeg&output-quality=60',
      ]}
    />
  </div>
);

export default withLayout(Jojo);
