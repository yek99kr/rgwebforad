import Hands from "./Hands";
import Ad from "./Ad";
import DragBackground from "./DragBackground";
import About from "./About";
import { useState, useCallback, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { motion } from "framer-motion";

const useMediaQueryWidth = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    // const isM = window.innerWidth < 768;

    media.addEventListener("change", updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

const useMediaQueryHeight = (height) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-height: ${height}px)`);

    media.addEventListener("change", updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

const HomePage = ({ router }) => {
  const isSmallWidth = useMediaQueryWidth(1023);
  const isSmallHeight = useMediaQueryHeight(550);
  const isSmallestHeight = useMediaQueryHeight(400);

  return (
    <>
      {isSmallWidth ? (
        <div className="absolute top-0 left-0 bg-[#e9ebf0] w-[100vw] h-[100vh]"></div>
      ) : (
        <DragBackground />
      )}

      {!isSmallestHeight && <Ad />}
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
        <About
          isSmallWidth={isSmallWidth}
          // isMobile={isMobile}
          router={router}
        />
      </motion.div>

      {isSmallWidth || isMobile || isSmallHeight ? null : <Hands />}
    </>
  );
};

export default HomePage;
