import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import QuestionOne from "./Questions/QuestionOne";
import "./VoteNow.css";
const VoteNow = () => {
  const [quiz, setQuiz] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(true);
    setQuiz(true);
  };

  // useEffect(() => {
  //   console.log("asdf", newQuestions);
  // }, [newQuestions]);

  const [isReady, setIsready] = useState(true);

  const [activeQuestion, setActiveQuestion] = useState(1);
  const allQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [q, setQ] = useState([]);

  const handleYes = () => {
    setIsready(false);
    const newQuestions = [];
    for (let i = 0; i < activeQuestion; i++) {
      const n = allQuestions[i];
      if (n !== undefined) {
        newQuestions.push(n);
      }
    }
    setActiveQuestion(activeQuestion + 1);
    setQ(newQuestions);
  };

  // const [activeQuestion, setActiveQuestion] = useState(1);
  // const allQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const [q, setQ] = useState([1]);
  // const handleCount = () => {
  //   // console.log(newQuestions);
  // };

  // console.log(q);

  // // console.log(newQuestions.length, newQuestions);

  // const showQuestion = () => {};

  return (
    <div className="pt-20 background ">
      <div className="w-[685px] m-auto flex items-center mb-[20px]">
        <div className="parent_class">
          <p className="btn  w-[165px] h-[33px]  m-1 normal-case text-[#EF4634] bg-white border-0 text-[16px] font-semibold">
            Change Topic
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3"
            >
              <path
                d="M6 7.9L0 1.9L1.4 0.5L6 5.1L10.6 0.5L12 1.9L6 7.9Z"
                fill="#EF4634"
              />
            </svg>
          </p>

          <ul className="childClass p-32 shadow">
            <p className="text-sm text-gray-500 font-semibold px-2">
              Select a topic to vote
            </p>
            <li className=" border-b-2 pb-3">
              <a>
                Would you support or opposee a ban on ambulance workers
                striking?
              </a>
            </li>
            <li className=" border-b-2 pb-3">
              <a>What is the most important issue government is facing now?</a>
            </li>
            <li className=" border-b-2 pb-3">
              <a>Do you support current education system?</a>
            </li>
            <li className=" border-b-2 pb-3">
              <a>What is the problem student facing most in the country?</a>
            </li>
            <li className="  pb-3">
              <a>What is the most counsumed product in FMCG category?</a>
            </li>
          </ul>
        </div>
        <input
          type="text"
          placeholder="Search for topics"
          className="input w-[550px] ml-[15px]"
        />
      </div>

      <>
        {/* <div className="bg-white w-[685px]  m-auto rounded-[7px] p-[30px] mt-[20px] ">
          <Questions
            quiz={quiz}
            setQuiz={setQuiz}
            checked={checked}
            setChecked={setChecked}
            handleClick={handleClick}
          />
        </div> */}
        {/* {quiz ? (
          <div className="bg-white w-[685px]  m-auto rounded-[7px] p-[30px] mt-[20px] ">
            <QuestionOne></QuestionOne>
          </div>
        ) : (
          ""
        )}

        <div className="bg-white w-[685px]  m-auto rounded-[7px] p-[30px] mt-[20px] quiz">
          <Questions
            quiz={quiz}
            setQuiz={setQuiz}
            checked={checked}
            setChecked={setChecked}
            handleClick={handleClick}
          ></Questions>
        </div> */}

        {isReady && (
          <div className=" bg-white w-[685px]  m-auto rounded-[7px] p-[30px] mt-[20px] ">
            <h2 className="text-xl font-bold text-center mb-20">
              Are you ready to vote?
            </h2>
            <div className="flex justify-around">
              <button className="btn btn-primary" onClick={handleYes}>
                Yes
              </button>
              <button className="btn btn-secondary">No</button>
            </div>
          </div>
        )}
        <div className="flex flex-col-reverse ">
          {q.map((question, idx) => (
            <div className=" bg-white w-[685px]  m-auto rounded-[7px] p-[30px] mt-[20px] ">
              <QuestionOne
                handleYes={handleYes}
                question={question}
                checked={checked}
                handleClick={handleClick}
              />
              {/* <button className="btn btn-primary" onClick={handleCount}>
              next
            </button> */}
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default VoteNow;
