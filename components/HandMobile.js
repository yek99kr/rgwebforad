import { motion } from "framer-motion";

const HandMobile = () => {
  return (
    <>
      <motion.img
        drag
        dragConstraints={{ left: "10%", right: "10%" }}
        dragElastic={0.2}
        src="/mobileHand/hand(1).png"
        className="absolute w-[42vw] rotate-[25deg] left-[-12%]"
      ></motion.img>
      {/* <img
        src="/mobileHand/hand(1).png"
        className="absolute w-[42vw] rotate-[25deg] left-[-12%]"
      ></img> */}
      <img
        src="/mobileHand/hand(4).png"
        className="absolute w-[42vw]  rotate-[-25deg] scale-x-[-1] top-[0%] right-[-12%]"
      ></img>

      <img
        src="/mobileHand/hand(3).png"
        className="absolute w-[42vw] rotate-[-25deg] bottom-[18%] left-[-12%]"
      ></img>

      <img
        src="/mobileHand/hand(2).png"
        className="absolute w-[42vw] rotate-[25deg] scale-x-[-1] bottom-[18%] right-[-12%]"
      ></img>
    </>
  );
};

export default HandMobile;
