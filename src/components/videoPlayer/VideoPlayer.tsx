import React, { useState } from "react";

import VideoPlayerLoading from "./VideoPlayerLoading";
import PlayButton from "../buttons/playButton/PlayButton";
import styles from "./VideoPlayer.module.css";

import { VideoPlayerState, BtnDisplayed } from "../../types";

interface VideoPlayerProps {
  videoPlayerState: VideoPlayerState;
  videoElementRef?: React.RefObject<HTMLVideoElement>;
  togglePlay: () => void;
  isLoading: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoPlayerState,
  videoElementRef,
  togglePlay,
  isLoading,
}) => {
  const [displayPlayBtn, setDisplayPlayBtn] =
    useState<BtnDisplayed>("not-displayed");

  const showButton = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setDisplayPlayBtn("displayed");
  };

  const hideButton = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setDisplayPlayBtn("not-displayed");
  };

  return (
    <div
      className={styles["video-player"]}
      onPointerEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        showButton(e)
      }
      onPointerLeave={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        hideButton(e)
      }
    >
      {isLoading || !videoPlayerState.videoData.src ? (
        <VideoPlayerLoading />
      ) : (
        <>
          <video ref={videoElementRef} controls={false}>
            <source
              src={videoPlayerState.videoData.src}
              type="video/webm"
            ></source>
          </video>
          <PlayButton
            isBtnDisabled={isLoading}
            btnDisplayed={displayPlayBtn}
            btnOnClick={togglePlay}
          >
            {videoPlayerState.isPlaying ? "Pause" : "Play"}
          </PlayButton>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
