import { useEffect, useState } from 'react';

export default () => {
  const isClient = typeof window === 'object';
  const [windowSize, setWindowSize] = useState({
    width: 375,
    height: 550,
    isPC: false,
  });
  useEffect(() => {
    if (!isClient) {
      return false;
    }
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      isPC: window.innerWidth > 800,
    });
  }, []);
  return windowSize;
};
