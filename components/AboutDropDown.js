import { useState, useRef, useEffect } from "react";

const AboutDropDown = ({ madWords }) => {
  const selectedOptionHidden = useRef();
  const [currentOption, setCurrentOption] = useState();
  const defaultWidth = useRef();
  const [changedWidth, setChangedWidth] = useState();

  useEffect(() => {
    setCurrentOption(
      defaultWidth.current.options[defaultWidth.current.options.selectedIndex]
        .text
    );
  }, []);

  useEffect(() => {
    setChangedWidth(selectedOptionHidden.current.offsetWidth);
  }, [currentOption]);

  function handleSelect(e) {
    setCurrentOption(e.target.options[e.target.selectedIndex].text);
  }

  return (
    <>
      <select
        ref={defaultWidth}
        className="border-0 bg-gray-50 p-0 rounded text-black  "
        style={{ width: 30 + changedWidth + "px" }}
        onChange={(e) => {
          handleSelect(e);
        }}
      >
        {madWords.map((item, i) => (
          <option key={i} value={item} style={{ pointerEvent: "auto" }}>
            {madWords[i]}
          </option>
        ))}
      </select>

      <span
        ref={selectedOptionHidden}
        className="absolute top-0 left-0 w-auto"
        style={{ visibility: "hidden" }}
      >
        {currentOption}
      </span>
    </>
  );
};

export default AboutDropDown;
