import React from "react";
import Hands from "./Hands";
import Ad from "./Ad";
import DragBackground from "./DragBackground";
import About from "./About";
import { useEffect } from "react";

const Home = () => {
  return (
    <>
      <DragBackground />

      {/* <div className="absolute top-0 left-0 bg-[#e9ebf0] w-[100vw] h-[100vh]"></div> */}

      <Ad />
      <About />

      <Hands />
    </>
  );
};

export default Home;
