import { useState, useEffect } from 'react';

interface windowSizeInterface {
  height: number;
  width: number;
}

export function useWindowSize(
  callback: (windowSize: windowSizeInterface) => void | (() => void) | unknown,
): windowSizeInterface {
  const getWindowSize = () => ({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const handleResize = () => {
    const windowSize = getWindowSize();
    callback({ height: windowSize.innerHeight, width: windowSize.innerWidth });
    setWindowSize(windowSize);
  };
  useEffect(() => {
    // 监听
    window.addEventListener('resize', handleResize);
    // 销毁
    return () => window.removeEventListener('resize', handleResize);
  });
  return {
    height: windowSize.innerHeight,
    width: windowSize.innerWidth,
  };
}
