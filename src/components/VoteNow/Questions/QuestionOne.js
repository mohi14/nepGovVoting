import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar/ProgressBar";

const QuestionOne = ({ handleYes, question }) => {
  const Answers = [
    {
      name: "Somewhat support",
      ratio: "90%",
    },
    {
      name: "Strongly support",
      ratio: "80%",
    },
    {
      name: "Somewhat oppose",
      ratio: "70%",
    },
    {
      name: "Strongly oppose",
      ratio: "60%",
    },
    {
      name: "Don't know",
      ratio: "80%",
    },
  ];
  const percentage = "20";

  const [isSelected, setIsSelected] = useState(false);

  const onChange = (id) => {
    handleYes();
    setIsSelected(true);
  };
  const [newValues, setNewValues] = useState([]);
  if (isSelected) {
    setTimeout(() => {
      Answers.map((value) => {
        let progressBars = document.querySelectorAll(".progress-bar");
        // let values = [value.ratio];
        setNewValues(value.ratio);
        progressBars.forEach((progress, index) => {
          progress.style.width = "80%";
        });
      });
    }, 0);
  }

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
        <p className="px-[10px] pb-1">Question {question}</p>
      </div>

      <div className="ml-[64px]">
        <p className="mt-[10px] text-[20px] font-semibold">
          Would you support or oppose increased security in stadiums in Qatar
          world cup?
        </p>
      </div>

      <div className="ml-[64px]">
        {Answers.map((value, index) => (
          <div className="flex mb-[28px] mt-[30px]">
            <input
              type="checkbox"
              className="checkbox"
              onClick={() => onChange(value)}
              disabled={isSelected}
            />
            {isSelected ? (
              <label className="ml-3 w-full">
                <div className="flex justify-between">
                  <p>{value.name}</p>
                  <p>{value.ratio}</p>
                </div>
                <ProgressBar></ProgressBar>
              </label>
            ) : (
              <label className="ml-3 w-full">{value.name}</label>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionOne;
