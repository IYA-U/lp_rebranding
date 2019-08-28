import React from 'react';
import { useRouter } from 'next/router';
import withConfigProvider from '../../../hoc/withConfigProvider';
import Footer from '../../../components/common/Footer';

const COLOR_CONFIG = {
  mode: 'dark',
  colors: {
    bright: {
      hue: 193,
      saturation: 67,
      lightness: 53,
    },
    dark: {
      hue: 210,
      saturation: 100,
      lightness: 19,
    },
  },
};

const PAGE_PARAMS = {
  page1: {
    LPID: 'LPIDFORPAGE_1',
    KANBAN: 'https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_960_720.jpg',
  },
  page2: {
    LPID: 'LPIDFORPAGE_2',
    KANBAN: 'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg',
  },
  page3: {
    LPID: 'LPIDFORPAGE_3',
    KANBAN: 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg',
  },
};

const ContentsOther = () => {
  const router = useRouter();
  console.log(router.query.pageId);
  const PARAM = PAGE_PARAMS[router.query.pageId];
  return (
    <>
      <h1>LPID:{PARAM.LPID}</h1>
      <img src={PARAM.KANBAN} alt="" />
      <Footer colorPtnId="a" />
    </>
  );
};

export default withConfigProvider(ContentsOther, COLOR_CONFIG);
