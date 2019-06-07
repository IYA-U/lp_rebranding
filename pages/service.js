import React from 'react';
import withLayout from '../components/Layout/withLayout';

import Keyvisual from '../components/keyvisual/Service';
import Feature from '../components/service/Feature';
import Spec from '../components/service/Spec';
import Trial from '../components/service/Trial';
import Faq from '../components/service/Faq';
import Footer from '../components/common/Footer';

const Service = () => (
  <>
    <Keyvisual />
    <Feature />
    <Spec />
    <Trial />
    <Faq />
    <Footer />
  </>
);

export default withLayout(Service);
