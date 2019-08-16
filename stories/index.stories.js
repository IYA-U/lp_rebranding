/*
パッケージimport
*/
import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import '../styleConfigs/globalStyle';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs';

/*
テトリスコンポーネントimport
*/
import Text from '../components/tetris/Text';
import Picture from '../components/tetris/Picture';
import Thumbnails from '../components/tetris/Thumbnails';

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

storiesOf('Thumbnails', module).add('標準', () => (
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
));
