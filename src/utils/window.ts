import { useState, useEffect } from "react";

interface IWindowDimensions {
  width?: number;
  height?: number;
  isMobile: boolean;
}

const WIDTH_BREAKPOINT = 630;

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState<IWindowDimensions>({
    width: undefined,
    height: undefined,
    isMobile: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < WIDTH_BREAKPOINT,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowDimensions;
};
