import React from 'react';
import COLOR_CONFIG from './COLOR_CONFIG';
import portalApiRequester from '../../reqester/portalApiRequester';
import withConfigProvider from '../../hoc/withConfigProvider';
import Footer from '../../components/common/Footer';

const Title = ({ stageApiResponse }) => {
  return (
    <>
      <h1>{stageApiResponse.data.title_name}</h1>
      <img src={`https://${stageApiResponse.data.thumbnail.standard}`} alt=""></img>
      <pre>{JSON.stringify(stageApiResponse, undefined, 2)}</pre>
      <Footer />
    </>
  );
};

Title.getInitialProps = async ({ query }) => {
  const stageApiResponse = await portalApiRequester({
    path: '/1/cmsuser/stage',
    params: {
      title_code: query.sid,
    },
  });
  return {
    stageApiResponse,
  };
};

export default withConfigProvider(Title, COLOR_CONFIG);
