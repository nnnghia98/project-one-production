import { useState, useEffect } from "react";

interface IWindowDimensions {
  width?: number;
  height?: number;
  isMobile: boolean;
  isTablet: boolean;
}

const MOBILE_BREAKPOINT = 746;
const TABLET_BREAKPOINT = 1050;

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState<IWindowDimensions>({
    width: undefined,
    height: undefined,
    isMobile: false,
    isTablet: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < MOBILE_BREAKPOINT,
        isTablet: window.innerWidth < TABLET_BREAKPOINT,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowDimensions;
};
