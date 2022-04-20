import AboutDropDown from "./AboutDropDown";
import { useState } from "react";
import { isMobile } from "react-device-detect";

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

      {isMobile ? (
        <p className="font-[400] pt-8">
          We have an{" "}
          <a
            href="https://www.instagram.com/real.good.studio/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="insta cursor-pointer inline">
              <span className="insta1 text-red-500">i</span>
              <span className="insta2 text-yellow-500">n</span>
              <span className="insta3 text-green-500">s</span>
              <span className="insta4 text-blue-500">t</span>
              <span className="insta5 text-pink-500">a</span>
              <span className="insta6 text-blue-500">g</span>
              <span className="insta7 text-red-500">r</span>
              <span className="insta8 text-yellow-500">a</span>
              <span className="insta9 text-green-500">m</span>
            </span>
          </a>{" "}
          with some more work.
        </p>
      ) : (
        <p className="font-[400] pt-8">
          We have an{" "}
          <a
            href="https://www.instagram.com/real.good.studio/"
            target="_blank"
            rel="noreferrer"
          >
            <span
              className="insta cursor-pointer inline-block w-[63px] sm:w-[85px] md:w-[90px] lg:w-[105px] xl:w-[120px] 2xl:w-[130px]"
              onMouseEnter={() => setHoverInsta(true)}
              onMouseLeave={() => setHoverInsta(false)}
            >
              <span className={hoverInsta ? "insta1 text-red-500" : "insta1 "}>
                i
              </span>
              <span
                className={hoverInsta ? "insta2 text-yellow-500" : "insta2 "}
              >
                n
              </span>
              <span
                className={hoverInsta ? "insta3 text-green-500" : "insta3 "}
              >
                s
              </span>
              <span className={hoverInsta ? "insta4 text-blue-500" : "insta4 "}>
                t
              </span>
              <span className={hoverInsta ? "insta5 text-pink-500" : "insta5 "}>
                a
              </span>
              <span className={hoverInsta ? "insta6 text-blue-500" : "insta6 "}>
                g
              </span>
              <span className={hoverInsta ? "insta7 text-red-500" : "insta7 "}>
                r
              </span>
              <span
                className={hoverInsta ? "insta8 text-yellow-500" : "insta8 "}
              >
                a
              </span>
              <span
                className={hoverInsta ? "insta9 text-green-500" : "insta9 "}
              >
                m
              </span>
            </span>
          </a>{" "}
          with some work and a{" "}
          <a
            href="https://realgooddeck.netlify.app/#0"
            target="_blank"
            rel="noreferrer"
          >
            <span
              className="deck cursor-pointer  inline-block w-[33px] sm:w-[40px] md:w-[43px] lg:w-[51px] xl:w-[59px] 2xl:w-[62px]"
              onMouseEnter={() => setHoverDeck(true)}
              onMouseLeave={() => setHoverDeck(false)}
            >
              <span className={hoverDeck ? "deck1 text-red-500" : "deck1 "}>
                d
              </span>
              <span className={hoverDeck ? "deck2 text-yellow-500" : "deck2 "}>
                e
              </span>
              <span className={hoverDeck ? "deck3 text-green-500" : "deck3 "}>
                c
              </span>
              <span className={hoverDeck ? "deck4 text-blue-500" : "deck4 "}>
                k
              </span>
            </span>{" "}
          </a>
          with some more work.
        </p>
      )}

      <p className="font-[400] pt-8">
        Currently taking on select projects{" "}
        <a href="mailto: hi@realgood.tv" target="_blank" rel="noreferrer">
          <span
            className=" cursor-pointer"
            onMouseEnter={() => setHoverEmail(true)}
            onMouseLeave={() => setHoverEmail(false)}
          >
            <span>hi@realgood.tv</span>
            {hoverEmail ? (
              <img src="send.png" className="w-[1.3em] inline m-2" />
            ) : (
              <img src="email.png" className="w-[1.3em] inline m-2" />
            )}
          </span>
        </a>
      </p>
    </div>
  );
};

export default About;
