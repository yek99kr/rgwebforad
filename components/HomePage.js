import React from "react";
import Hands from "./Hands";
import Ad from "./Ad";
import DragBackground from "./DragBackground";
import About from "./About";
import { isMobile } from "react-device-detect";
// import useResize from "../utils/useResize";

const HomePage = () => {
  // useResize();
  // console.log(isLarge);
  return (
    <>
      {isMobile ? (
        <div className="absolute top-0 left-0 bg-[#e9ebf0] w-[100vw] h-[100vh]"></div>
      ) : (
        <DragBackground />
      )}

      <Ad />
      <About />

      {!isMobile && <Hands />}
    </>
  );
};

export default HomePage;
