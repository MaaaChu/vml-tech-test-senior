import React from "react";

import VideoInfo from "..//videoInfo/VideoInfo";
import VideoPlayer from "../videoPlayer/VideoPlayer";
import Alert from "../../alert/Alert";

import styles from "./VideoSection.module.css";
import { VideoPlayerState } from "../../types";

interface VideoSectionProps {
  videoPlayerState: VideoPlayerState;
  videoElementRef: React.RefObject<HTMLVideoElement>;
  togglePlay: () => void;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  videoPlayerState,
  videoElementRef,
  togglePlay,
}) => {
  return (
    <div className={styles["video-section"]}>
      {videoPlayerState.error.length > 0 ? (
        <Alert message={videoPlayerState.error} />
      ) : (
        <>
          <VideoPlayer
            videoPlayerState={videoPlayerState}
            videoElementRef={videoElementRef}
            togglePlay={togglePlay}
          />
          <VideoInfo
            videoTitle={videoPlayerState.videoData.title}
            videoAuthor={videoPlayerState.videoData.author}
          />
        </>
      )}
    </div>
  );
};

export default VideoSection;
