import React, { createContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface ScreenSize {
  width: number;
//   height: number;
}

interface ScreenSizeContextProps {
  screenSize: ScreenSize;
}

const ScreenSizeContext = createContext<ScreenSizeContextProps | undefined>(
  undefined
);

export const ScreenSizeProvider: React.FC<Props> = ({ children }) => {
  const [windowSize, setWindowSize] = useState<ScreenSize>({
    width: window.innerWidth,
    // height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
    //   height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const contextValue: ScreenSizeContextProps = {
    screenSize: windowSize,
  };

  return (
    <ScreenSizeContext.Provider value={contextValue}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export default ScreenSizeContext;
