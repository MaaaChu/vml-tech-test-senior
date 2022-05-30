import React, { useState } from "react";

import VideoPlayerLoading from "./VideoPlayerLoading";
import PlayButton from "../playButton/PlayButton";
import styles from "./VideoPlayer.module.css";

import { VideoPlayerState, PlayBtnDisplayed } from "../../types/Types";

interface VideoPlayerProps {
  videoPlayerState: VideoPlayerState;
  videoElementRef?: React.RefObject<HTMLVideoElement>;
  togglePlay: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoPlayerState,
  videoElementRef,
  togglePlay,
}) => {
  const [displayPlayBtn, setDisplayPlayBtn] =
    useState<PlayBtnDisplayed>("not-displayed");

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
      {videoPlayerState.isLoading || !videoPlayerState.videoData.src ? (
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
            isPlaying={videoPlayerState.isPlaying}
            isBtnDisabled={videoPlayerState.isLoading}
            btnDisplayed={displayPlayBtn}
            btnOnClick={togglePlay}
          />
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
