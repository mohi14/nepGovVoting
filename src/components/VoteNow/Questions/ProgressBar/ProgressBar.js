import React, { useEffect } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ ratio, isSelected }) => {
  console.log(ratio);
  if (isSelected) {
    setTimeout(() => {
      let progressBars = document.getElementById("bar");
      progressBars.style.width = ratio;

      // console.log(progressBars);
      // //  forEach((progress, index) => {
      // //   progress.style.width = ratio;
      // // });
    }, 0);
  }
  return (
    <div className="progress-box">
      <div className="progress-line">
        <div className="progress-container">
          <div className="progress-bar" id="bar"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
