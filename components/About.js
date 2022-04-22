import AboutDropDown from "./AboutDropDown";
import { useState } from "react";

const About = (props) => {
  const [hoverInsta, setHoverInsta] = useState(false);
  const [hoverDeck, setHoverDeck] = useState(false);
  const [hoverEmail, setHoverEmail] = useState(false);

  const madWords1 = [
    "full service",
    "industry leading",
    "first to market",
    "plant based",
    "talent driven",
    "direct to consumer",
  ];
  const madWords2 = [
    "good ideas",
    "highly original solutions",
    "visual storytelling",
    "bringing your vision to life",
    "making the world a better place",
    "constantly reclycling",
  ];
  const madWords3 = [
    "clients",
    "BMW",
    "Drake",
    "Adult Swim",
    "Balenciaga",
    "Nike",
    "Paramount Pictures",
    "mike's hard lemonade",
    "Samsung",
    "Eric Andre",
    "Magnolia Pictures",
    "MTV",
    "Netflix",
    "Disney",
  ];
  const madWords4 = ["make", "sculpt", "curate", "visualize"];
  const madWords5 = ["good", "groundbreaking", "meaningful", "eco-friendly"];
  const madWords6 = [
    "memes",
    "commerce experiences",
    "cool vids",
    "snacks",
    "tiktok dances",
  ];
  const madWords7 = [
    "explores the intersection between art and technology",
    "a Kardashian might retweet",
    "pushes the boulder up the hill",
    "inspires, educates, and converts",
    "your CMO will love",
  ];

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[63%] leading-[2.4] w-[85vw]  md:w-[60vw] md:leading-[2.2] lg:w-[55vw] lg:leading-[1.9] text-[12px] sm:text-[16px] md:text-[17px] lg:text-[20px] xl:text-[23px] 2xl:text-[25px] text-center">
      <p className="font-[400]">
        We&apos;re{" "}
        <img
          src="/logoShort.png"
          className="inline w-[61px] sm:w-[75px] md:w-[85px] lg:w-[95px] xl:w-[100px] 2xl:w-[115px] ml-0.5 mr-0.5"
        />
        . We&apos;re a <AboutDropDown madWords={madWords1} /> creative studio
        specializing in <AboutDropDown madWords={madWords2} />.
      </p>

      <p className="font-[400] pt-8">
        We collaborate with <AboutDropDown madWords={madWords3} /> to{" "}
        <AboutDropDown madWords={madWords4} />{" "}
        <AboutDropDown madWords={madWords5} /> commercials, music videos, XR
        experiences, social content, and <AboutDropDown madWords={madWords6} />.
      </p>

      <p className="font-[400] pt-8">
        We make work that <AboutDropDown madWords={madWords7} />.
      </p>

      <p className="font-[400] pt-8">
        We have an{" "}
        <a
          href="https://www.instagram.com/real.good.studio/"
          target="_blank"
          rel="noreferrer"
        >
          <span
            className="insta cursor-pointer inline-block w-[63px] sm:w-[85px] md:w-[90px] lg:w-[105px] xl:w-[120px] 2xl:w-[130px] noselect thumbcursor"
            onMouseEnter={() => setHoverInsta(true)}
            onMouseLeave={() => setHoverInsta(false)}
          >
            <span className="insta1 text-pink-500">i</span>
            <span className="insta2 text-sky-400">n</span>
            <span className="insta3 text-yellow-500">s</span>
            <span className="insta4 text-purple-500">t</span>
            <span className="insta5 text-pink-500">a</span>
            <span className="insta6 text-sky-400">g</span>
            <span className="insta7 text-pink-500">r</span>
            <span className="insta8 text-yellow-500">a</span>
            <span className="insta9 text-green-500">m</span>
          </span>
        </a>{" "}
        with some work and a{" "}
        <a
          href="https://realgooddeck.netlify.app/#0"
          target="_blank"
          rel="noreferrer"
        >
          <span
            className="deck inline-block w-[33px] sm:w-[40px] md:w-[43px] lg:w-[51px] xl:w-[59px] 2xl:w-[62px] noselect thumbcursor"
            onMouseEnter={() => setHoverDeck(true)}
            onMouseLeave={() => setHoverDeck(false)}
          >
            <span className="deck1 text-purple-500">d</span>
            <span className="deck2 text-yellow-500">e</span>
            <span className="deck3 text-sky-400">c</span>
            <span className="deck4 text-pink-500">k</span>
          </span>{" "}
        </a>
        with some more work.
      </p>

      <p className="font-[400] pt-8 select-auto">
        Currently taking on select projects{" "}
        <a href="mailto: hi@realgood.tv" target="_blank" rel="noreferrer">
          <span
            className="thumbcursor"
            onMouseEnter={() => setHoverEmail(true)}
            onMouseLeave={() => setHoverEmail(false)}
          >
            <span>hi@realgood.tv</span>
            {hoverEmail ? (
              <img src="send.png" className="w-[1.3em] inline m-2 noselect" />
            ) : (
              <img src="email.png" className="w-[1.3em] inline m-2 noselect" />
            )}
          </span>
        </a>
      </p>
    </div>
  );
};

export default About;
