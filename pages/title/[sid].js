import React from 'react';
import { useRouter } from 'next/router';
import withConfigProvider from '../../hoc/withConfigProvider';
import Footer from '../../components/common/Footer';
import { Device, Spec, Feature } from '../../components/service';

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

const Title = () => {
  const router = useRouter();
  const { sid } = router.query;

  return (
    <>
      <h1>SID:{sid}</h1>
      <Feature colorPtnId="a" />
      <Device colorPtnId="a" />
      <Spec colorPtnId="a" />
      <Footer colorPtnId="a" />
    </>
  );
};

export default withConfigProvider(Title, COLOR_CONFIG);
