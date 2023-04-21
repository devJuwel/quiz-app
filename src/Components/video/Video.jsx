import React from "react";
import classes from "./Video.module.css";

const Video = () => {
  return (
    <>
      <a href="quiz.html">
        <div className={classes.video}>
          <img
            src="https://github.com/learnwithsumit/react-quiz/blob/main/html/images/3.jpg?raw=true"
            alt=""
          />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
          <div className={classes.qmeta}>
            <p>10 Questions</p>
            <p>Score : Not taken yet</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Video;
