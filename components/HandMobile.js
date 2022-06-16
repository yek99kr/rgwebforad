import { motion } from "framer-motion";

const HandMobile = () => {
  return (
    <>
      {/* <motion.img
        drag
        dragConstraints={{ left: "10%", right: "10%" }}
        dragElastic={0.2}
        src="/mobileHand/hand(1).png"
        className="absolute w-[42vw] sm:w-[40vw] md:w-[32vw] lg:w-[28vw] rotate-[25deg] left-[-12%] md:left-[-5%] "
      ></motion.img> */}

      <img
        drag
        dragConstraints={{ left: "10%", right: "10%" }}
        dragElastic={0.2}
        src="/mobileHand/hand(1).png"
        className="absolute w-[32vw] 3xs:w-[38vw] 2xs:w-[38vw] md:w-[32vw] top-[3%] lg:w-[28vw] rotate-[25deg] left-[-12%] 4xs:left-[15%] 2xs:left-[-12%]  md:left-[-5%]"
      ></img>

      <img
        src="/mobileHand/hand(4).png"
        className="absolute w-[32vw] 3xs:w-[38vw] 2xs:w-[38vw] md:w-[32vw] lg:w-[28vw] rotate-[-25deg] scale-x-[-1] top-[3%] right-[-12%] 4xs:right-[-15%] 2xs:right-[-12%] md:right-[-5%]"
      ></img>

      <img
        src="/mobileHand/hand(3).png"
        className="absolute w-[32vw] 3xs:w-[38vw] 2xs:w-[38vw] md:w-[32vw] lg:w-[28vw]  rotate-[-25deg] bottom-[18%] left-[-12%] 4xs:left-[15%] 2xs:left-[-12%] md:left-[-5%]"
      ></img>

      <img
        src="/mobileHand/hand(2).png"
        className="absolute w-[32vw] 3xs:w-[38vw] 2xs:w-[38vw] md:w-[32vw] lg:w-[28vw]  rotate-[25deg] scale-x-[-1] bottom-[18%] right-[-12%] 4xs:right-[-15%] 2xs:right-[-12%] md:right-[-5%]"
      ></img>
    </>
  );
};

export default HandMobile;
