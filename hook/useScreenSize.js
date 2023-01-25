import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [width, setWidth] = useState(1000);
  //   const [height, setHeight] = useState(1000);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
    // setHeight(window.innerHeight);
  };
  // , height
  return { width };
};

export default useScreenSize;
