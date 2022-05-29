import React from "react";
import styles from "./VideoPlayer.module.css";

const VideoPlayerLoading = () => {
  return (
    <div className={styles["video-player--loading"]}>
      <h1>Video Loading</h1>
    </div>
  );
};

export default VideoPlayerLoading;