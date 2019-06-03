import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import device from '../../../styleConfigs/breakPoints';
import SubPatternWrap from '../common/SubPatternWrap';

const Video = ({
  poster, m3u8, mp4, webm,
}) => (
  <video
    width="100%"
    controls={true}
    controlsList="nodownload"
    preload="metadata"
    poster={poster}
  >
    <source src={m3u8} />
    <source src={mp4} />
    <source src={webm} />
    動画を再生するには、videoタグをサポートしたブラウザが必要です。
  </video>
);

export default Video;
