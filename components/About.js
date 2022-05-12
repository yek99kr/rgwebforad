import AboutDropDown from "./AboutDropDown";
import { useState } from "react";

const About = (props) => {
  const [hoverInsta, setHoverInsta] = useState(false);
  const [hoverDeck, setHoverDeck] = useState(false);
  const [hoverEmail, setHoverEmail] = useState(false);
  const [renderNew, setRenderNew] = useState(false);

  const madWords1 = [
    "full service",
    "industry leading",
    "first to market",
    "plant based",
    "talent driven",
  ];
  const madWords2 = [
    "good ideas",
    "commerce experiences",
    "highly original solutions",
    "making the world a better place",
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
    "Eric Andre",
    "Magnolia Pictures",
    "MTV",
    "Netflix",
    "Disney",
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
  ];
  const madWords7 = [
    "intersection",
    "relationship",
    "boundaries",
    "interplay",
    "discourse",
    "potentiality",
  ];
  const madWords8 = [
    "art",
    "computers",
    "memes",
    "instagram",
    "the internet",
    "visual experiences",
    "biodiversity",
    "complex carbohydrates",
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
    "cool vids",
  ];

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[63%] leading-[2.4] w-[85vw]  md:w-[60vw] md:leading-[2.2] lg:w-[55vw] lg:leading-[1.9] text-[12px] sm:text-[16px] md:text-[17px] lg:text-[20px] xl:text-[23px] 2xl:text-[24.5px] text-center">
      <p className="font-[400]">
        We&apos;re{" "}
        <img
          src="/logoShort.png"
          className="inline w-[61px] sm:w-[75px] md:w-[85px] lg:w-[95px] xl:w-[100px] 2xl:w-[107px] ml-0.5 mr-0.5"
        />
        . We&apos;re a <AboutDropDown madWords={madWords1} /> creative studio
        specializing in <AboutDropDown madWords={madWords2} />.
      </p>

      <p className="font-[400] pt-7">
        We work with <AboutDropDown madWords={madWords3} /> to make{" "}
        <AboutDropDown madWords={madWords4} />.
      </p>

      <p className="font-[400] pt-7">
        We make work that <AboutDropDown madWords={madWords6} /> the{" "}
        <AboutDropDown madWords={madWords7} /> between{" "}
        <AboutDropDown madWords={madWords8} /> and{" "}
        <AboutDropDown madWords={madWords9} />.
      </p>
      {props.isSmallWidth ? (
        <p className="font-[400] pt-7">
          We have an{" "}
          <a
            href="https://www.instagram.com/real.good.studio/"
            target="_blank"
            rel="noreferrer"
          >
            <span
              className="insta cursor-pointer inline-block noselect thumbcursor"
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
          with some work.
        </p>
      ) : (
        <p className="font-[400] pt-7">
          We have an{" "}
          <a
            href="https://www.instagram.com/real.good.studio/"
            target="_blank"
            rel="noreferrer"
          >
            <span
              className="insta cursor-pointer inline-block noselect thumbcursor"
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
            href="https://realgooddeck.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <span
              className="deck inline-block noselect thumbcursor"
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
      )}

      <p className="font-[400] pt-7 select-auto">
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
