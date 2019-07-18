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
        hdline="青年ジョルノ・ジョバァーナ、<br class=brPc>街から麻薬を排除するという夢があった。"
        paragraph="イタリア裏社会を牛耳るギャング組織「パッショーネ」に属する青年ジョルノ・ジョバァーナ。 彼には街に麻薬を流す組織の「ボス」を倒し、街から麻薬を排除するという夢があった。 謎に秘められたボスに近づくため、同じ夢を抱く幹部のブローノ・ブチャラティ率いるチームと共に ボスの娘トリッシュ・ウナの護衛指令を果たしたジョルノたち。 しかしその指令の真の目的は、ボスの正体の手掛かりとなるトリッシュを ボス自らの手で確実に葬ることだった。 "
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
              lead: 'ベテラン司書',
              title: 'フリン',
              paragraph:
                '自信家なベテラン司書。チームプレイが苦手だが寂しがりやな一面も。自信家なベテラン司書。',
            },
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書',
              title: 'フリン',
              paragraph:
                '自信家なベテラン司書。チームプレイが苦手だが寂しがりやな一面も。自信家なベテラン司書。',
            },
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書',
              title: 'フリン',
              paragraph:
                '自信家なベテラン司書。チームプレイが苦手だが寂しがりやな一面も。自信家なベテラン司書。',
            },
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書',
              title: 'フリン',
              paragraph:
                '自信家なベテラン司書。チームプレイが苦手だが寂しがりやな一面も。自信家なベテラン司書。',
            },
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書',
              title: 'フリン',
              paragraph:
                '自信家なベテラン司書。チームプレイが苦手だが寂しがりやな一面も。自信家なベテラン司書。',
            },
          ]}
        />
      </SubPatternWrap>
      <SubPatternWrap name="偶数">
        <Cards
          cards={[
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書',
              title: 'フリン',
              paragraph:
                '自信家なベテラン司書。チームプレイが苦手だが寂しがりやな一面も。自信家なベテラン司書。',
            },
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書',
              title: 'フリン',
              paragraph:
                '自信家なベテラン司書。チームプレイが苦手だが寂しがりやな一面も。自信家なベテラン司書。',
            },
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書',
              title: 'フリン',
              paragraph:
                '自信家なベテラン司書。チームプレイが苦手だが寂しがりやな一面も。自信家なベテラン司書。',
            },
            {
              img: '/static/img/legalhigh.jpg',
              lead: 'ベテラン司書',
              title: 'フリン',
              paragraph:
                '自信家なベテラン司書。チームプレイが苦手だが寂しがりやな一面も。自信家なベテラン司書。',
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
