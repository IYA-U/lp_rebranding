import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import device from '../../../styleConfigs/breakPoints';
import SubPatternWrap from '../common/SubPatternWrap';

const Video = () => (
  <>
    <video
      width="100%"
      controls={true}
      controlsList="nodownload"
      preload="metadata"
      poster="/static/img/twdVideoThumb.jpg">
      <source src="http://streamh01.nxtv.jp/hls03/special/unext_promotion/twd_s9_2_trailer/hls/twd_s9_2_trailer/twd_s9_2_trailer.m3u8" />
      <source src="http://streamh01.nxtv.jp/hls03/special/unext_promotion/twd_s9_2_trailer/mp4/twd_s9_2_trailer.mp4" />
      <source src="http://streamh01.nxtv.jp/hls03/special/unext_promotion/twd_s9_2_trailer/webm/twd_s9_2_trailer.webm" />
      動画を再生するには、videoタグをサポートしたブラウザが必要です。
    </video>
  </>
);

export default Video;
