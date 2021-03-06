import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  html {
    font-size: 10px;
    height: 100%;
  }

  body {
    color: #333333;
    font-size: 1.4rem;
    line-height: 1.8;
    font-family: "Hiragino Kaku Gothic ProN","ヒラギノ角ゴ Pro W3",Meiryo,"メイリオ","Helvetica Neue",Helvetica,Arial,Sans-Serif;
    font-weight: 400;
    font-feature-settings : "palt";
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: unset;
    background-color: #ffffff;
    text-size-adjust: 100%;
    height: 100%;
  }

  img {
    max-width: 100%;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: underline;
    &:hover {
      transition: .2s;
      opacity: 0.8;
      text-decoration: underline;
    }
  }

  p {
    margin-bottom: 0;
    font-size:1.6rem;
    line-height:1.87;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @media (min-width: 640px) {
    html { font-size: 10px; }
    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }

  div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,img, ul, li, header, footer, nav, section, article, a,p, blockquote, span,header,footer,nav,section,article,input,textarea, figure , figcaption, main, pre {
    box-sizing: border-box;
    word-wrap: break-word;
    margin: 0;
  }

  #__next {
    height: 100%;
  }

  
`;
