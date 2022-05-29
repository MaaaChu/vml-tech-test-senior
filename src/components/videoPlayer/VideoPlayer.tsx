import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import VideoPlayerLoading from "./VideoPlayerLoading";
import PlayButton from "../playButton/PlayButton";
import styles from "./VideoPlayer.module.css";

import useVideoPlayer from "../../hooks/useVideoPlayer";

import { PlayBtnDisplayed } from "../../types/Types";

interface VideoPlayerProps {
  videoSrc?: string;
  videoElement?: React.RefObject<HTMLVideoElement>;
  isLoading?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = () => {
  const [displayPlayBtn, setDisplayPlayBtn] =
    useState<PlayBtnDisplayed>("not-displayed");
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const [
    videoPlayerState,
    setVideoId,
    setVideoSrc,
    togglePlay,
    toggleMute,
    handleVideoSpeed,
    setIsLoading,
  ] = useVideoPlayer(videoElementRef);

  const showButton = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setDisplayPlayBtn("displayed");
  };

  const hideButton = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setDisplayPlayBtn("not-displayed");
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://my-json-server.typicode.com/jordansb/video-api/videos/${videoPlayerState.videoId}`
      )
      .then((response) => {
        if (response.status !== 200) {
          console.log("Oh noo");
          return;
        }
        setVideoSrc(response.data.src);
        setIsLoading(false);
      });
  }, [videoPlayerState.videoId]);

  return (
    <div
      className={styles["video-player"]}
      onMouseEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        showButton(e)
      }
      onMouseLeave={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        hideButton(e)
      }
    >
      {videoPlayerState.isLoading || !videoPlayerState.videoSrc ? (
        <VideoPlayerLoading />
      ) : (
        <>
          <video ref={videoElementRef} controls={false}>
            <source src={videoPlayerState.videoSrc} type="video/webm"></source>
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
