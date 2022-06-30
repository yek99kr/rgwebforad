import Hands from "./Hands";
import Ad from "./Ad";
import DragBackground from "./DragBackground";
import About from "./About";
import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import useMediaQueryHeight from "../utils/useMediaQueryHeight";
import useMediaQueryWidth from "../utils/useMediaQueryWidth";
import useIsTouch from "../utils/useIsTouch";

const HomePage = ({ router }) => {
  const isSmallWidth = useMediaQueryWidth(750);
  const isSmallerWidth = useMediaQueryWidth(638);
  // const isSmallestWidth = useMediaQueryWidth(210);

  const isSmallHeight = useMediaQueryHeight(639);
  const isSmallerHeight = useMediaQueryHeight(550);
  const isSmallestHeight = useMediaQueryHeight(349);
  const isTouch = useIsTouch();

  let hand;

  if (
    isSmallestHeight ||
    (!isSmallerWidth && isSmallHeight) ||
    (isSmallWidth && !isSmallHeight) ||
    isSmallerWidth ||
    isTouch
  ) {
    hand = null;
  } else {
    hand = <Hands />;
  }

  // w214 h379

  return (
    <>
      {isSmallerHeight || isSmallerWidth || isTouch ? (
        <div className="absolute top-0 left-0 bg-[#e9ebf0] w-[100vw] h-[100vh]"></div>
      ) : (
        <DragBackground />
      )}

      {isSmallestHeight || (!isSmallerWidth && isSmallerHeight) ? null : <Ad />}

      <motion.div
        key={router.route}
        className="w-[100vw]"
        initial="pageInitial"
        animate="pageAnimate"
        transition={{ delay: 0.5, default: { duration: 1 } }}
        variants={{
          pageInitial: { opacity: 0 },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <About router={router} isSmallestHeight={isSmallestHeight} />
      </motion.div>

      {hand}
    </>
  );
};

export default HomePage;
