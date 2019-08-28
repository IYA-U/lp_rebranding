import React from 'react';
import portalApiRequester from '../../reqester/portalApiRequester';
import withConfigProvider from '../../hoc/withConfigProvider';
import Footer from '../../components/common/Footer';

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

const BookSakuhin = ({ bookStageApiResponse }) => {
  return (
    <>
      <h1>{bookStageApiResponse.data.book.book_name}</h1>
      <img src={`https://${bookStageApiResponse.data.book.thumbnail.standard}`} alt=""></img>
      <pre>{JSON.stringify(bookStageApiResponse, undefined, 2)}</pre>
      <Footer />
    </>
  );
};

BookSakuhin.getInitialProps = async ({ query }) => {
  const bookStageApiResponse = await portalApiRequester({
    path: '/v1/books/stage',
    params: {
      age_rating_code: 'R18',
      view_book_code: 'TOTAL',
      book_sakuhin_code: query.bsd,
      feature_piece_code: '',
    },
  });
  return {
    bookStageApiResponse,
  };
};

export default withConfigProvider(BookSakuhin, COLOR_CONFIG);
