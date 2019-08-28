import React from 'react';
import COLOR_CONFIG from './COLOR_CONFIG';
import portalApiRequester from '../../reqester/portalApiRequester';
import withConfigProvider from '../../hoc/withConfigProvider';
import Footer from '../../components/common/Footer';

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
