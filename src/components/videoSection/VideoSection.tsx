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
  isLoading: boolean;
  error: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  videoPlayerState,
  videoElementRef,
  togglePlay,
  isLoading,
  error,
}) => {
  return (
    <div className={styles["video-section"]}>
      {error.length > 0 ? (
        <Alert message={error} />
      ) : (
        <>
          <VideoPlayer
            videoPlayerState={videoPlayerState}
            videoElementRef={videoElementRef}
            togglePlay={togglePlay}
            isLoading={isLoading}
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
