import AboutDropDown from "./AboutDropDown";
import { useState } from "react";
import Link from "next/link";

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
      {!props.isSmallestHeight ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[61%] leading-[2] md:leading-[2.2] lg:leading-[1.9] w-[90vw] sm:w-[85vw] md:w-[85vw] lg:w-[75vw] xl:w-[63vw] 2xl:w-[60vw] text-[2.9vw] 4xs:text-[2.9vw] sm:text-[15px] md:text-[16px] lg:text-[18.5px] xl:text-[19.5px] 2xl:text-[23px] text-center bg-[#e9ebf0]/40 p-5">
          <p className="font-[400]">
            We&apos;re{" "}
            <img
              src="/logoShort.png"
              alt="logo"
              className="inline w-[13.5vw] sm:w-[70px] md:w-[76px] lg:w-[87.5px] xl:w-[96px] 2xl:w-[105px] ml-0.5 mr-0.5"
            />
            . We&apos;re a <AboutDropDown madWords={madWords1} /> creative
            studio specializing in{" "}
            <span style={{ whiteSpace: "nowrap" }}>
              <AboutDropDown madWords={madWords2} />.
            </span>
          </p>

          <p className="font-[400] pt-[1.8em] sm:pt-[1.5em]">
            We work with <AboutDropDown madWords={madWords3} /> to make{" "}
            <span style={{ whiteSpace: "nowrap" }}>
              <AboutDropDown madWords={madWords4} />.
            </span>
          </p>
          <p className="font-[400] pt-[1.8em] sm:pt-[1.5em]">
            We make work that <AboutDropDown madWords={madWords6} /> the{" "}
            <AboutDropDown madWords={madWords7} /> between{" "}
            <AboutDropDown madWords={madWords8} /> and{" "}
            <span style={{ whiteSpace: "nowrap" }}>
              <AboutDropDown madWords={madWords9} />.
            </span>
          </p>

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
              <Link href="https://deck.realgood.tv/">
                <a>
                  <span className="deck inline-block noselect thumbcursor">
                    <span className="wiggle1 text-purple-500">d</span>
                    <span className="wiggle2 text-yellow-500">e</span>
                    <span className="wiggle3 text-sky-400">c</span>
                    <span className="wiggle4 text-pink-500">k</span>
                  </span>{" "}
                </a>
              </Link>
              with some more work.
            </p>
          </>

          <p className="font-[400] pt-[1.8em] sm:pt-[1.5em] select-auto">
            Currently taking on select projects{" "}
            <a
              href="mailto: hello@realgood.tv"
              target="_blank"
              rel="noreferrer"
            >
              <span
                className="thumbcursor"
                onMouseEnter={() => setHoverEmail(true)}
                onMouseLeave={() => setHoverEmail(false)}
              >
                <span>hello@realgood.tv</span>
                {hoverEmail ? (
                  <img
                    src="send.png"
                    alt="send"
                    className="w-[1.3em] inline m-2 noselect"
                  />
                ) : (
                  <img
                    src="email.png"
                    alt="email"
                    className="w-[1.3em] inline m-2 noselect"
                  />
                )}
              </span>
            </a>
          </p>
        </div>
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[40%] w-[87vw] text-[3.1vw] sm:text-[16px] md:text-[17px] lg:text-[19px] xl:text-[21px] 2xl:text-[24.5px] text-center">
          <p className="font-[400] select-auto">
            Currently taking on select projects{" "}
            <a
              href="mailto: hello@realgood.tv"
              target="_blank"
              rel="noreferrer"
            >
              <span className="thumbcursor">
                <span>hello@realgood.tv</span>

                <img
                  src="email.png"
                  alt="email"
                  className="w-[1.3em] inline m-2 noselect"
                />
              </span>
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default About;
