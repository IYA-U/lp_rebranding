import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Picture from '../components/tetris/Picture';

storiesOf('Picture', module)
  .add('1枚', () => (
    <Picture
      pictures={['//imgc.nxtv.jp/img/info/titspot/00035/SID0035811_fwxga.png']}
    />
  ))
  .add('2枚', () => (
    <Picture
      pictures={[
        '//imgc.nxtv.jp/img/info/titspot/00035/SID0035811_fwxga.png',
        '//imgc.nxtv.jp/img/info/titspot/00010/SID0010849_fwxga.png',
      ]}
    />
  ))
  .add('3枚', () => (
    <Picture
      pictures={[
        '//imgc.nxtv.jp/img/info/titspot/00035/SID0035811_fwxga.png',
        '//imgc.nxtv.jp/img/info/titspot/00010/SID0010849_fwxga.png',
        '//imgc.nxtv.jp/img/info/titspot/00013/SID0013938_fwxga.png',
      ]}
    />
  ))
  .add('4枚', () => (
    <Picture
      pictures={[
        '//imgc.nxtv.jp/img/info/titspot/00035/SID0035811_fwxga.png',
        '//imgc.nxtv.jp/img/info/titspot/00010/SID0010849_fwxga.png',
        '//imgc.nxtv.jp/img/info/titspot/00013/SID0013938_fwxga.png',
        '//imgc.nxtv.jp/img/info/titspot/00011/SID0011762_fwxga.png',
      ]}
    />
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span
        role="img"
        aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
