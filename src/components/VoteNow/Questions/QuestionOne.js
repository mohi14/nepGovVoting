import React, { useEffect, useRef, useState } from "react";

const QuestionOne = ({
  handleYes,
  quiz,
  setQuiz,
  checked,
  setChecked,
  handleClick,
  question,
}) => {
  const isChecked = useRef(false);

  const [isSelected, setIsSelected] = useState(false);

  // console.log("hello", isChecked);

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const onChange = (id) => {
    // Find index
    const findIdx = selectedCheckboxes.indexOf(id);

    console.log(findIdx);

    // Index > -1 means that the item exists and that the checkbox is checked
    // and in that case we want to remove it from the array and uncheck it
    if (findIdx > -1) {
      selectedCheckboxes.splice(findIdx, 1);
    } else {
      selectedCheckboxes.push(id);
    }
    console.log(selectedCheckboxes);

    setSelectedCheckboxes(selectedCheckboxes);
    handleYes();
    // handleClick();

    setIsSelected(true);
  };

  useEffect(() => {
    // console.log("asdf", selectedCheckboxes);
  }, [selectedCheckboxes]);

  return (
    <div className="mb-32">
      <div className="border-y border-[#808DA5] border-3 py-[10px] flex ">
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-4 mt-2"
        >
          <path
            d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z"
            fill="#3560AD"
          />
        </svg>
        <p className="text-[20px] font-semibold">
          Do you think the World Cup 2022 in Qatar has been successful or
          unsuccessful?
        </p>
      </div>

      <div className="bg-[#808DA5] w-[100px]  text-white mt-[30px] ml-[64px]">
        <p className="px-[10px] pb-1">
          {" "}
          Question {question} {selectedCheckboxes}{" "}
        </p>
      </div>

      <div className="ml-[64px]">
        <p className="mt-[10px] text-[20px] font-semibold">
          Would you support or oppose increased security in stadiums in Qatar
          world cup?
        </p>
      </div>

      <div className="ml-[64px]">
        {[0, 1, 2, 3].map((value, index) => (
          <div className="flex mb-[28px] mt-[30px]">
            <input
              type="checkbox"
              className="checkbox"
              onClick={() => onChange(value)}
              selected={selectedCheckboxes.includes(index)}
              ref={isChecked}
              disabled={isSelected}
            />
            {isSelected ? (
              <label className="ml-3 w-full">
                <div className="flex justify-between">
                  <p>Somewhat support</p>
                  <p>50%</p>
                </div>
                <progress
                  className="progress w-full progress-primary rounded-none"
                  value="50"
                  max="100"
                ></progress>
              </label>
            ) : (
              <label className="ml-3 w-full" onClick={handleClick}>
                Somewhat support
              </label>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionOne;
