import React from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className={styles.progressContainer}>
      <div
        className={styles.progressFill}
        style={{
          width: `${progress}%`,
          transition: "width 0.3s ease-in-out",
        }}
      />
    </div>
  );
};

export default ProgressBar;
