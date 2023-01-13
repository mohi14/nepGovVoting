import React, { useEffect } from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  return (
    <div className="progress-box">
      <div class="progress-line">
        <div class="progress-container">
          <div class="progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
