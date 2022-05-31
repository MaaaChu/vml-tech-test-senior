import React from "react";
import Heading from "../typography/Heading";

import styles from "./VideoInfo.module.css";

interface VideoInfoProps {
  videoTitle: string;
  videoAuthor: string;
}

const VideoInfo: React.FC<VideoInfoProps> = ({ videoTitle, videoAuthor }) => {
  return (
    <div className={styles["video-info"]}>
      <Heading size="heading-1" colour="primary">
        {videoTitle}
      </Heading>
      <Heading size="heading-4" colour="secondary">
        {videoAuthor}
      </Heading>
    </div>
  );
};

export default VideoInfo;
