import React from "react";

import Video from "./Video";
import classes from "./videos.module.css";

const videos = () => {
  return (
    <div>
      <div className={classes.videos}>
        <Video />
      </div>
    </div>
  );
};

export default videos;
