import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import KeyvisualLayout from '../components/keyvisual/Common/Layout';
import withLayout, { Config } from '../components/Layout/withLayout';

const Keyvisual = () => {
  const config = useContext(Config);
  const PageComponentName = config.pattern;
  let DynamicComponent;
  if (PageComponentName) {
    DynamicComponent = dynamic(
      () => import(`../components/keyvisual/${PageComponentName}`),
      {
        ssr: false,
      },
    );
  } else {
    DynamicComponent = dynamic(() => import('../components/keyvisual/Switcher'),);
  }

  return (
    <>
      {/* <KeyvisualLayout>
        <DynamicComponent />
      </KeyvisualLayout> */}
    </>
  );
};

export default withLayout(Keyvisual);
