import React from 'react';

const Index = () => (
  <>
    <video width="100%" autoPlay muted id="video" playsInline>
      <source src="/static/video/video.mp4" />
      動画を再生するには、videoタグをサポートしたブラウザが必要です。
    </video>
  </>
);

export default Index;
