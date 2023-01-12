import React, { useState } from "react";

const Questions = ({ quiz, setQuiz, checked, setChecked, handleClick }) => {
  // const [quiz, setQuiz] = useState(false);
  // const [checked, setChecked] = useState(false);

  // const handleClick = () => {
  //   setChecked(true);
  //   setQuiz(true);
  // };

  return (
    <div>
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

      {quiz ? (
        <>
          <div className="bg-[#808DA5] w-[100px]  text-white mt-[30px] ml-[64px]">
            <p className="px-[10px] pb-1"> Question 1 </p>
          </div>

          <div className="ml-[64px]">
            <p className="mt-[10px] text-[20px] font-semibold">
              Would you support or oppose increased security in stadiums in
              Qatar world cup?
            </p>
          </div>

          <div className="ml-[64px]">
            <div className="flex mb-[28px] mt-[30px]">
              <input
                type="checkbox"
                className="checkbox"
                onClick={handleClick}
                disabled={checked}
              />
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
            </div>

            <div className="flex mb-[28px]">
              <input
                type="checkbox"
                className="checkbox"
                onClick={handleClick}
                disabled={checked}
              />
              <label className="ml-3 w-full">
                <div className="flex justify-between">
                  <p>Strongly support</p>
                  <p>30%</p>
                </div>
                <progress
                  className="progress w-full progress-primary"
                  value="30"
                  max="100"
                ></progress>
              </label>
            </div>
            <div className="flex mb-[28px]">
              <input
                type="checkbox"
                className="checkbox"
                onClick={handleClick}
                disabled={checked}
              />
              <label className="ml-3 w-full">
                <div className="flex justify-between">
                  <p>Somewhat oppose</p>
                  <p>90%</p>
                </div>
                <progress
                  className="progress w-full progress-primary"
                  value="90"
                  max="100"
                ></progress>
              </label>
            </div>
            <div className="flex mb-[28px]">
              <input
                type="checkbox"
                className="checkbox"
                onClick={handleClick}
                disabled={checked}
              />
              <label className="ml-3 w-full">
                <div className="flex justify-between">
                  <p>Strongly oppose</p>
                  <p>100%</p>
                </div>
                <progress
                  className="progress w-full progress-primary"
                  value="100"
                  max="100"
                ></progress>
              </label>
            </div>
            <div className="flex mb-[28px]">
              <input
                type="checkbox"
                className="checkbox"
                onClick={handleClick}
                disabled={checked}
              />
              <label className="ml-3 w-full">
                <div className="flex justify-between">
                  <p>Don’t know</p>
                  <p>30%</p>
                </div>
                <progress
                  className="progress w-full progress-primary progress-primary"
                  value="30"
                  max="100"
                ></progress>
              </label>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-[#808DA5] w-[100px]  text-white mt-[30px] ml-[64px]">
            <p className="px-[10px] pb-1"> Question 1 </p>
          </div>

          <div className="ml-[64px]">
            <p className="mt-[10px] text-[20px] font-semibold">
              Would you support or oppose increased security in stadiums in
              Qatar world cup?
            </p>
          </div>

          <div className="ml-[64px]">
            <div className="flex mb-[28px] mt-[30px]">
              <input
                type="checkbox"
                className="checkbox"
                onClick={handleClick}
                disabled={checked}
              />
              <label className="ml-3 w-full">Somewhat support</label>
            </div>

            <div className="flex mb-[28px]">
              <input
                type="checkbox"
                className="checkbox"
                onClick={handleClick}
                disabled={checked}
              />
              <label className="ml-3 w-full">Strongly support</label>
            </div>
            <div className="flex mb-[28px]">
              <input
                type="checkbox"
                className="checkbox"
                onClick={handleClick}
                disabled={checked}
              />
              <label className="ml-3 w-full">Somewhat oppose</label>
            </div>
            <div className="flex mb-[28px]">
              <input
                type="checkbox"
                className="checkbox"
                onClick={handleClick}
                disabled={checked}
              />
              <label className="ml-3 w-full">Strongly oppose</label>
            </div>
            <div className="flex mb-[28px]">
              <input
                type="checkbox"
                className="checkbox"
                onClick={handleClick}
                disabled={checked}
              />
              <label className="ml-3 w-full">Don’t know</label>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Questions;
