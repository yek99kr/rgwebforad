import Hands from "./Hands";
import Ad from "./Ad";
import DragBackground from "./DragBackground";
import About from "./About";
import { useState, useCallback, useEffect } from "react";
import { isMobile } from "react-device-detect";
import HandMobile from "./HandMobile";

function isTouchDevice() {
  if (typeof window === "undefined") return false;
  const prefixes = " -webkit- -moz- -o- -ms- ".split(" ");
  function mq(query) {
    return typeof window !== "undefined" && window.matchMedia(query).matches;
  }
  // @ts-ignore
  if (
    "ontouchstart" in window ||
    (window?.DocumentTouch && document instanceof DocumentTouch)
  )
    return true;
  const query = ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join(
    ""
  ); // include the 'heartz' - https://git.io/vznFH
  return mq(query);
}

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

const HomePageTest = ({ router }) => {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const {
      isAndroid,
      isIPad13,
      isIPhone13,
      isWinPhone,
      isMobileSafari,
      isTablet,
    } = require("react-device-detect");
    setIsTouch(
      isTouch ||
        isAndroid ||
        isIPad13 ||
        isIPhone13 ||
        isWinPhone ||
        isMobileSafari ||
        isTablet ||
        isTouchDevice()
    );
  }, []);

  // 320px 568px 768 x 1076 Pixels

  const isSmallWidth = useMediaQueryWidth(1024);
  const isSmallestWidth = useMediaQueryWidth(210);
  const isSmallHeight = useMediaQueryHeight(700);
  const isSmallerHeight = useMediaQueryHeight(479);
  const isSmallestHeight = useMediaQueryHeight(377);

  let hand;

  if (isSmallestHeight) {
    hand = null;
  } else if (isSmallHeight && !isSmallWidth) {
    hand = null;
  } else if (isSmallWidth || isTouch) {
    hand = <HandMobile />;
  } else {
    hand = <Hands />;
  }

  // if (isSmallHeight && !isSmallWidth) {
  //   ad = null;
  // } else if (isSmallestHeight) {
  //   ad = null;
  // } else {
  //   ad = <Ad />;
  // }

  // w320px h568px 211 567

  return (
    <>
      {isSmallWidth ? (
        <div className="absolute top-0 left-0 bg-[#e9ebf0] w-[100vw] h-[100vh]"></div>
      ) : (
        <DragBackground />
      )}

      {/* {ad} */}
      {isSmallestHeight || (isSmallerHeight && !isSmallestWidth) ? null : (
        <Ad />
      )}

      <About
        isSmallWidth={isSmallWidth}
        isSmallerHeight={
          isSmallestHeight || (isSmallerHeight && !isSmallestWidth)
        }
      />
      {/* 
      {isSmallWidth || isMobile || isSmallHeight ? <HandMobile /> : <Hands />} */}

      {hand}
    </>
  );
};

export default HomePageTest;
