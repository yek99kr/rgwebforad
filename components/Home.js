import React from "react";
import Hands from "./Hands";
import Ad from "./Ad";
import DragBackground from "./DragBackground";
import About from "./About";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";

const Home = () => {
  return (
    <>
      {isMobile ? (
        <div className="absolute top-0 left-0 bg-[#e9ebf0] w-[100vw] h-[100vh]"></div>
      ) : (
        <DragBackground />
      )}

      <Ad />
      <About />

      {isMobile ? null : <Hands />}
    </>
  );
};

export default Home;
