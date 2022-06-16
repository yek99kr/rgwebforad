import AboutDropDown from "./AboutDropDown";
import { useState } from "react";

const About = (props) => {
  const [hoverEmail, setHoverEmail] = useState(false);

  const madWords1 = [
    "full service",
    "premium",
    "interdisciplinary",
    "first to market",
    "plant based",
    "talent driven",
    "industry leading",
  ];
  const madWords2 = [
    "good ideas",
    "commerce experiences",
    "highly original solutions",
    "liminal space",
    "making it pop",
  ];
  const madWords3 = [
    "brands",
    "BMW",
    "Drake",
    "Adult Swim",
    "Balenciaga",
    "Nike",
    "Paramount Pictures",
    "mike's hard lemonade",
    "Samsung",
    "The Eric Andre Show",
    "Magnolia Pictures",
    "MTV",
    "Netflix",
    "Disney",
    "Rick and Morty",
  ];
  const madWords4 = [
    "content",
    "commercials",
    "music videos",
    "campaigns",
    "websites",
    "filters/lenses",
    "animation",
    "illustration",
    "design",
  ];
  const madWords5 = [
    "stuff",
    "commerce experiences",
    "cool vids",
    "snacks",
    "tiktok dances",
  ];
  const madWords6 = [
    "explores",
    "inspires",
    "recontextualizes",
    "interpolates",
    "educates",
    "questions",
    "operates within",
    "elevates",
  ];
  const madWords7 = [
    "intersection",
    "relationship",
    "boundaries",
    "interplay",
    "discourse",
    "potentiality",
    "polarity",
  ];
  const madWords8 = [
    "art",
    "computers",
    "memes",
    "instagram",
    "the internet",
    "visual experiences",
    "biodiversity",
    "tweets",
    "complex carbohydrates",
    "multi level marketing",
    "kim",
    "space",
    "the metaverse",
  ];
  const madWords9 = [
    "technology",
    "NFTs",
    "the multiverse",
    "innovation",
    "a painting",
    "oat milk",
    "experiential marketing",
    "simulacrum",
    "kardashian",
    "time",
    "cool vids",
  ];

  return (
    <>
      {!props.isSmallerHeight ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[63%] leading-[2] md:leading-[2.2] lg:leading-[1.9] w-[87vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] xl:w-[60vw] 2xl:w-[55vw]  text-[3vw] 5xs:text-[2.9vw] 4xs:text-[2.9vw] sm:text-[16px] md:text-[17px] lg:text-[19px] xl:text-[21px] 2xl:text-[24.5px] text-center">
          <p className="font-[400]">
            We&apos;re{" "}
            <img
              src="/logoShort.png"
              className="inline w-[13.5vw] sm:w-[75px] md:w-[85px] lg:w-[87.5px] xl:w-[96px] 2xl:w-[107px] ml-0.5 mr-0.5"
            />
            . We&apos;re a <AboutDropDown madWords={madWords1} /> creative
            studio specializing in <AboutDropDown madWords={madWords2} />.
          </p>

          <p className="font-[400] pt-[1.8em] sm:pt-[1.5em]">
            We work with <AboutDropDown madWords={madWords3} /> to make{" "}
            <AboutDropDown madWords={madWords4} />.
          </p>
          <p className="font-[400] pt-[1.8em] sm:pt-[1.5em]">
            We make work that <AboutDropDown madWords={madWords6} /> the{" "}
            <AboutDropDown madWords={madWords7} /> between{" "}
            <AboutDropDown madWords={madWords8} /> and{" "}
            <AboutDropDown madWords={madWords9} />.
          </p>
          {props.isSmallWidth ? (
            <>
              <p className="font-[400] pt-[1.8em] sm:pt-[1.5em]">
                We have an{" "}
                <a
                  href="https://www.instagram.com/real.good.studio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="insta cursor-pointer inline-block noselect thumbcursor">
                    <span className="wiggleMobile1 text-pink-500">i</span>
                    <span className="wiggleMobile2 text-sky-400">n</span>
                    <span className="wiggleMobile3 text-yellow-500">s</span>
                    <span className="wiggleMobile4 text-purple-500">t</span>
                    <span className="wiggleMobile5 text-pink-500">a</span>
                    <span className="wiggleMobile6 text-sky-400">g</span>
                    <span className="wiggleMobile7 text-pink-500">r</span>
                    <span className="wiggleMobile8 text-yellow-500">a</span>
                    <span className="wiggleMobile9 text-green-500">m</span>
                  </span>
                </a>{" "}
                with some work and a{" "}
                <a
                  href="https://realgooddeck.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="deck inline-block noselect thumbcursor">
                    <span className="wiggleMobile1 text-purple-500">d</span>
                    <span className="wiggleMobile2 text-yellow-500">e</span>
                    <span className="wiggleMobile3 text-sky-400">c</span>
                    <span className="wiggleMobile4 text-pink-500">k</span>
                  </span>{" "}
                </a>
                with some more work.
              </p>
            </>
          ) : (
            <>
              <p className="font-[400] pt-[1.8em] sm:pt-[1.5em]">
                We have an{" "}
                <a
                  href="https://www.instagram.com/real.good.studio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="insta cursor-pointer inline-block noselect thumbcursor">
                    <span className="wiggle1 text-pink-500">i</span>
                    <span className="wiggle2 text-sky-400">n</span>
                    <span className="wiggle3 text-yellow-500">s</span>
                    <span className="wiggle4 text-purple-500">t</span>
                    <span className="wiggle5 text-pink-500">a</span>
                    <span className="wiggle6 text-sky-400">g</span>
                    <span className="wiggle7 text-pink-500">r</span>
                    <span className="wiggle8 text-yellow-500">a</span>
                    <span className="wiggle9 text-green-500">m</span>
                  </span>
                </a>{" "}
                with some work and a{" "}
                <a
                  href="https://realgooddeck.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="deck inline-block noselect thumbcursor">
                    <span className="wiggle1 text-purple-500">d</span>
                    <span className="wiggle2 text-yellow-500">e</span>
                    <span className="wiggle3 text-sky-400">c</span>
                    <span className="wiggle4 text-pink-500">k</span>
                  </span>{" "}
                </a>
                with some more work.
              </p>
            </>
          )}

          <p className="font-[400] pt-[1.8em] sm:pt-[1.5em] select-auto">
            Currently taking on select projects{" "}
            <a href="mailto: hi@realgood.tv" target="_blank" rel="noreferrer">
              <span
                className="thumbcursor"
                onMouseEnter={() => setHoverEmail(true)}
                onMouseLeave={() => setHoverEmail(false)}
              >
                <span>hi@realgood.tv</span>
                {hoverEmail ? (
                  <img
                    src="send.png"
                    className="w-[1.3em] inline m-2 noselect"
                  />
                ) : (
                  <img
                    src="email.png"
                    className="w-[1.3em] inline m-2 noselect"
                  />
                )}
              </span>
            </a>
          </p>
        </div>
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[55%] w-[87vw] text-[3.1vw] sm:text-[16px] md:text-[17px] lg:text-[19px] xl:text-[21px] 2xl:text-[24.5px] text-center">
          <p className="font-[400] select-auto">
            Currently taking on select projects{" "}
            <a href="mailto: hi@realgood.tv" target="_blank" rel="noreferrer">
              <span
                className="thumbcursor"
                onMouseEnter={() => setHoverEmail(true)}
                onMouseLeave={() => setHoverEmail(false)}
              >
                <span>hi@realgood.tv</span>
                {hoverEmail ? (
                  <img
                    src="send.png"
                    className="w-[1.3em] inline m-2 noselect"
                  />
                ) : (
                  <img
                    src="email.png"
                    className="w-[1.3em] inline m-2 noselect"
                  />
                )}
              </span>
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default About;
