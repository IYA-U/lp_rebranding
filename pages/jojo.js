import React from 'react';
import withLayout from '../components/Layout/withLayout';
import Thumbnails from '../components/tetris/Thumbnails';

const Jojo = () => (
  <div>
    <div>ジョジョの奇妙な冒険</div>
    <Thumbnails
      thumbnails={[
        {
          text: 'ジョジョの奇妙な冒険',
          thumbnail:
            '//imgc.nxtv.jp/img/info/tit/00013/SID0013083.png?output-format=webp&output-quality=60',
          sid: 'SID0036791',
        },
        {
          text: 'ジョジョの奇妙な冒険',
          thumbnail:
            '//imgc.nxtv.jp/img/info/tit/00013/SID0013083.png?output-format=webp&output-quality=60',
          sid: 'SID0036791',
        },
        {
          text: 'ジョジョの奇妙な冒険',
          thumbnail:
            '//imgc.nxtv.jp/img/info/tit/00013/SID0013083.png?output-format=webp&output-quality=60',
          sid: 'SID0036791',
        },
        {
          text: 'ジョジョの奇妙な冒険',
          thumbnail:
            '//imgc.nxtv.jp/img/info/tit/00013/SID0013083.png?output-format=webp&output-quality=60',
          sid: 'SID0036791',
        },
      ]}
    ></Thumbnails>
  </div>
);

export default withLayout(Jojo);
