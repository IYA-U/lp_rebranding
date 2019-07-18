import React from 'react';
import styled from 'styled-components';
import withLayout from '../components/Layout/withLayout';
import SubPatternWrap from '../components/tetris/common/SubPatternWrap';
import Example from '../components/tetris/Example';
import Text from '../components/tetris/Text';
import Picture from '../components/tetris/Picture';
import PictureText from '../components/tetris/PictureText';
import Cards from '../components/tetris/Cards';
import Thumbnails from '../components/tetris/Thumbnails';
import HorizontalCard from '../components/tetris/HorizontalCard';
import Trailer from '../components/tetris/Trailer';

const Tetris = () => (
  <>
    <PatternWrap name="グリッドの見本">
      <Example />
    </PatternWrap>
    <PatternWrap name="Text">
      <Text
        lead="運命の歯車が、今動き出す。"
        hdline="出会うことのない二人の出会い。"
        paragraph="『秒速5センチメートル』（07年）、『言の葉の庭』（13年）など意欲的な作品を数多く作り出してきた気鋭のアニメーション映画監督・新海誠。精緻な風景描写とすれ違う男女の物語を、美しい色彩と繊細な言葉によって紡ぎ出す“新海ワールド”は、世代や業界、国内外を問わず人々に大きな刺激と影響をおよぼしてきた。新海誠監督の待望の新作となる『君の名は。』は、夢の中で“入れ替わる”少年と少女の恋と奇跡の物語。世界の違う二人の隔たりと繋がりから生まれる「距離」のドラマを圧倒的な映像美とスケールで描き出す。作画監督を務めるのは『千と千尋の神隠し』（01年）など数多くのスタジオジブリ作品を手掛けた、アニメーション界のレジェンド、安藤"
      />
    </PatternWrap>
    <PatternWrap name="Picture">
      <SubPatternWrap name="1">
        <Picture
          pictures={[
            'https://imgc.nxtv.jp/img/info/titspot/00019/SID0019592_fwxga.png?output-format=jpeg&output-quality=60',
          ]}
        />
      </SubPatternWrap>
      <SubPatternWrap name="2">
        <Picture
          pictures={[
            'https://imgc.nxtv.jp/img/info/titspot/00019/SID0019592_fwxga.png?output-format=jpeg&output-quality=60',
            'https://imgc.nxtv.jp/img/info/titspot/00033/SID0033220_fwxga.png?output-format=jpeg&output-quality=60',
          ]}
        />
      </SubPatternWrap>
      <SubPatternWrap name="3">
        <Picture
          pictures={[
            'https://imgc.nxtv.jp/img/info/titspot/00019/SID0019592_fwxga.png?output-format=jpeg&output-quality=60',
            'https://imgc.nxtv.jp/img/info/titspot/00033/SID0033220_fwxga.png?output-format=jpeg&output-quality=60',
            'https://imgc.nxtv.jp/img/info/titspot/00033/SID0033221_fwxga.png?output-format=jpeg&output-quality=60',
          ]}
        />
      </SubPatternWrap>

      <SubPatternWrap name="4">
        <Picture
          pictures={[
            'https://imgc.nxtv.jp/img/info/titspot/00019/SID0019592_fwxga.png?output-format=jpeg&output-quality=60',
            'https://imgc.nxtv.jp/img/info/titspot/00033/SID0033220_fwxga.png?output-format=jpeg&output-quality=60',
            'https://imgc.nxtv.jp/img/info/titspot/00033/SID0033221_fwxga.png?output-format=jpeg&output-quality=60',
            'https://imgc.nxtv.jp/img/info/titspot/00033/SID0033222_fwxga.png?output-format=jpeg&output-quality=60',
          ]}
        />
      </SubPatternWrap>
    </PatternWrap>

    <PatternWrap name="PictureText">
      <PictureText
        picture="//imgc.nxtv.jp/img/info/titspot/00020/SID0020051_fwxga.png?output-format=jpeg&output-quality=60"
        subhead="01. ただのゾンビ•ドラマと思うなかれ！"
        paragraph="極限に追い込まれた人間の心理を描いたヒューマンドラマ。現代社会の安全が破壊され秩序を失った世界で、生存者たちは確固たる人間性を保てるのか？そして生きるための「愛、強さ、責任感、自制心」とは？"
      />
    </PatternWrap>

    <PatternWrap name="Cards">
      <SubPatternWrap name="奇数">
        <Cards
          cards={[
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書(ダミー項目)',
              title: 'ジョルノ・<br />ジョバァーナ',
              paragraph:
                '父親はジョースター家の宿敵DIO自分を救ってくれたギャングに憧れて、街を浄化するために、自身もギャングスターになる決意を抱いてギャング組織「パッショーネ」に入団。',
            },
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書(ダミー項目)',
              title: 'ブローノ・<br />ブチャラティ',
              paragraph:
                'ギャング組織「パッショーネ」のチームリーダーの一人で、ポルポの部下。20歳。おかっぱのように切り揃えた髪に、白地に点が入り多数のジッパーが付いたスーツを着用している。',
            },
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書(ダミー項目)',
              title: 'トリッシュ・<br />ウナ',
              paragraph:
                'パッショーネのボスの娘。1986年4月19日生まれ。15歳。四則演算の記号がプリントされたパレオのような服を着ている。',
            },
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書(ダミー項目)',
              title: 'グイード・<br />ミスタ',
              paragraph:
                'ブチャラティの部下でチームのムードメーカー。18歳。ファッションは網模様の服と縞のズボン、網と丸点模様の帽子。',
            },
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書(ダミー項目)',
              title: 'ナランチャ・<br/>ギルガ',
              paragraph:
                'ブチャラティの部下。17歳。小柄な少年で、布をカチューシャのように使って髪型を簡易に作っている。',
            },
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書(ダミー項目)',
              title: 'レオーネ・<br />アバッキオ',
              paragraph:
                'ブチャラティの部下。21歳。銀色の長髪で唇に薄紫色のルージュを引いた男。元は正義感溢れる警察官だったが、腐敗した社会に失望、自らも収賄などの悪事に手を染めるようになる。',
            },
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書(ダミー項目)',
              title: 'パンナコッタ・<br />フーゴ',
              paragraph:
                'ブチャラティの部下でチームのブレーン。1985年生まれの16歳。無数の大穴の空いた服と、イチゴ柄のネクタイを着用している。',
            },
          ]}
        />
      </SubPatternWrap>
      <SubPatternWrap name="偶数">
        <Cards
          cards={[
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書(ダミー項目)',
              title: 'ジョルノ・<br />ジョバァーナ',
              paragraph:
                '父親はジョースター家の宿敵DIO自分を救ってくれたギャングに憧れて、街を浄化するために、自身もギャングスターになる決意を抱いてギャング組織「パッショーネ」に入団。',
            },
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書(ダミー項目)',
              title: 'ブローノ・<br />ブチャラティ',
              paragraph:
                'ギャング組織「パッショーネ」のチームリーダーの一人で、ポルポの部下。20歳。おかっぱのように切り揃えた髪に、白地に点が入り多数のジッパーが付いたスーツを着用している。',
            },
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書(ダミー項目)',
              title: 'トリッシュ・<br />ウナ',
              paragraph:
                'パッショーネのボスの娘。1986年4月19日生まれ。15歳。四則演算の記号がプリントされたパレオのような服を着ている。',
            },
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書(ダミー項目)',
              title: 'グイード・<br />ミスタ',
              paragraph:
                'ブチャラティの部下でチームのムードメーカー。18歳。ファッションは網模様の服と縞のズボン、網と丸点模様の帽子。',
            },
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書(ダミー項目)',
              title: 'ナランチャ・<br/>ギルガ',
              paragraph:
                'ブチャラティの部下。17歳。小柄な少年で、布をカチューシャのように使って髪型を簡易に作っている。',
            },
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書(ダミー項目)',
              title: 'レオーネ・<br />アバッキオ',
              paragraph:
                'ブチャラティの部下。21歳。銀色の長髪で唇に薄紫色のルージュを引いた男。元は正義感溢れる警察官だったが、腐敗した社会に失望、自らも収賄などの悪事に手を染めるようになる。',
            },
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書(ダミー項目)',
              title: 'パンナコッタ・<br />フーゴ',
              paragraph:
                'ブチャラティの部下でチームのブレーン。1985年生まれの16歳。無数の大穴の空いた服と、イチゴ柄のネクタイを着用している。',
            },
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書(ダミー項目)',
              title: 'パンナコッタ・<br />フーゴ',
              paragraph:
                'ブチャラティの部下でチームのブレーン。1985年生まれの16歳。無数の大穴の空いた服と、イチゴ柄のネクタイを着用している。',
            },
          ]}
        />
      </SubPatternWrap>
    </PatternWrap>

    <PatternWrap name="HorizontalCard">
      <SubPatternWrap name="5:5">
        <HorizontalCard
          hdline="02. エミー賞授賞！迫力のゾンビと鬼気迫るサバイバル劇！"
          paragraph="極限に追い込まれた人間の心理を描いたヒューマンドラマ。現代社会の安全が破壊され秩序を失った世界で、生存者たちは確固たる人間性を保てるのか？そして生きるための「愛、強さ、責任感、自制心」とは？"
        />
      </SubPatternWrap>
      <SubPatternWrap name="画像左 5:5">
        <HorizontalCard
          hdline="02. エミー賞授賞！迫力のゾンビと鬼気迫るサバイバル劇！"
          paragraph="極限に追い込まれた人間の心理を描いたヒューマンドラマ。現代社会の安全が破壊され秩序を失った世界で、生存者たちは確固たる人間性を保てるのか？そして生きるための「愛、強さ、責任感、自制心」とは？"
          isLeft
        />
      </SubPatternWrap>
      <SubPatternWrap name="6:4">
        <HorizontalCard
          hdline="02. エミー賞授賞！迫力のゾンビと鬼気迫るサバイバル劇！"
          paragraph="極限に追い込まれた人間の心理を描いたヒューマンドラマ。現代社会の安全が破壊され秩序を失った世界で、生存者たちは確固たる人間性を保てるのか？そして生きるための「愛、強さ、責任感、自制心」とは？"
          is64
        />
      </SubPatternWrap>
      <SubPatternWrap name="画像左 6:4">
        <HorizontalCard
          hdline="02. エミー賞授賞！迫力のゾンビと鬼気迫るサバイバル劇！"
          paragraph="極限に追い込まれた人間の心理を描いたヒューマンドラマ。現代社会の安全が破壊され秩序を失った世界で、生存者たちは確固たる人間性を保てるのか？そして生きるための「愛、強さ、責任感、自制心」とは？"
          is64
          isLeft
        />
      </SubPatternWrap>
    </PatternWrap>
    <PatternWrap name="Thumbnails">
      <SubPatternWrap name="奇数">
        <Thumbnails
          title="今までのジョジョ作品は、<br />ここにある"
          thumbnails={[
            {
              text: 'フロリダ・プロジェクト 真夏の魔法',
              thumbnail:
                'https://imgc.nxtv.jp/img/info/eps/00209/ED00209186.png?output-format=jpeg&output-quality=60',
              sid: 'SID0036791',
            },
            {
              text: 'フロリダ・プロジェクト 真夏の魔法',
              thumbnail:
                'https://imgc.nxtv.jp/img/info/eps/00209/ED00209186.png?output-format=jpeg&output-quality=60',
              sid: 'SID0036791',
            },
            {
              text: 'フロリダ・プロジェクト 真夏の魔法',
              thumbnail:
                'https://imgc.nxtv.jp/img/info/eps/00209/ED00209186.png?output-format=jpeg&output-quality=60',
              sid: 'SID0036791',
            },
            {
              text: 'フロリダ・プロジェクト 真夏の魔法',
              thumbnail:
                'https://imgc.nxtv.jp/img/info/eps/00209/ED00209186.png?output-format=jpeg&output-quality=60',
              sid: 'SID0036791',
            },
            {
              text: 'フロリダ・プロジェクト 真夏の魔法',
              thumbnail:
                'https://imgc.nxtv.jp/img/info/eps/00209/ED00209186.png?output-format=jpeg&output-quality=60',
              sid: 'SID0036791',
            },
          ]}
        />
      </SubPatternWrap>
      <SubPatternWrap name="偶数">
        <Thumbnails
          thumbnails={[
            {
              text: 'gifted／ギフテッド',
              thumbnail:
                'https://imgc.nxtv.jp/img/info/eps/00192/ED00192928.png?output-format=jpeg&output-quality=60',
              sid: 'SID0034172',
            },
            {
              text: 'gifted／ギフテッド',
              thumbnail:
                'https://imgc.nxtv.jp/img/info/eps/00192/ED00192928.png?output-format=jpeg&output-quality=60',
              sid: 'SID0034172',
            },
            {
              text: 'gifted／ギフテッド',
              thumbnail:
                'https://imgc.nxtv.jp/img/info/eps/00192/ED00192928.png?output-format=jpeg&output-quality=60',
              sid: 'SID0034172',
            },
            {
              text: 'gifted／ギフテッド',
              thumbnail:
                'https://imgc.nxtv.jp/img/info/eps/00192/ED00192928.png?output-format=jpeg&output-quality=60',
              sid: 'SID0034172',
            },
          ]}
        />
      </SubPatternWrap>
    </PatternWrap>
    <PatternWrap name="Trailer">
      <SubPatternWrap name="テキストなし">
        <Trailer
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
      </SubPatternWrap>
      <SubPatternWrap name="テキストつき">
        <Trailer
          texts={{
            hdline: 'トレーラー',
            paragraph:
              '2010年の放送以降、世界中を熱狂の渦に巻き込んだ『ウォーキング・デッド』もいよいよシーズン9！前シーズンから18ヶ月が経過した世界が描かれることも発表されており、新キャラクターや懐かしのキャラクターの登場も楽しみだ。U-NEXTでは過去シーズンが見放題なのはもちろん、シーズン9を日本最速で楽しめるFOXチャンネルのリアルタイム配信もご用意！',
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
      </SubPatternWrap>
    </PatternWrap>
  </>
);

const PatternWrap = styled.div`
  padding-top: 30px;
  position: relative;
  &:after {
    background-color: #666;
    color: white;
    content: ${({ name }) => `"${name}"`};
    display: block;
    font-size: 20px;
    font-weight: bold;
    height: 30px;
    left: 0;
    line-height: 1;
    padding: 4px;
    position: absolute;
    text-align: center;
    top: 0;
    width: 100%;
  }
`;

export default withLayout(Tetris);
