import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Keyvisual from '../components/keyvisual/Service';
import Feature from '../components/service/Feature';
import Spec from '../components/service/Spec';
import Trial from '../components/service/Trial';
import Faq from '../components/service/Faq';
import Footer from '../components/common/Footer';

const Service = () => (
  <ThemeProvider
    theme={{
      colors: {
        primary: '#00b9bb',
        lighter: '#62dedf',
      },
    }}
  >
    <>
      <Keyvisual />
      <Feature />
      <Spec />
      <Trial />
      <Faq />
      <Footer />
    </>
  </ThemeProvider>
);

export default Service;
