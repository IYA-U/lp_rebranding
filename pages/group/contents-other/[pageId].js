import React from 'react';
import { useRouter } from 'next/router';
import COLOR_CONFIG from './COLOR_CONFIG';
import PAGE_PARAMS from './PAGE_PARAMS';
import withConfigProvider from '../../../hoc/withConfigProvider';
import Footer from '../../../components/common/Footer';

const BookSeries = () => {
  const router = useRouter();
  const PARAM = PAGE_PARAMS[router.query.pageId];
  return (
    <>
      <h1>LPID:{PARAM.LPID}</h1>
      <img src={PARAM.KANBAN} alt="" />
      <Footer colorPtnId="a" />
    </>
  );
};

export default withConfigProvider(BookSeries, COLOR_CONFIG);
