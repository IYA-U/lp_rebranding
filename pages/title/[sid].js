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
