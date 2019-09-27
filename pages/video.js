import React from 'react';

const Index = () => (
  <>
    <h1>LP実験</h1>

    <video width="100%" autoPlay muted controls>
      <source src="/static/video/video.mp4" />
      動画を再生するには、videoタグをサポートしたブラウザが必要です。
    </video>
  </>
);

export default Index;
