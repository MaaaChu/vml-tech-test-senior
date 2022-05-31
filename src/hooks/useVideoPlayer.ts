import React, { useState, useEffect } from "react";

import { VideoPlayerState, VideoData } from "../types";

const useVideoPlayer = (
  videoElement: React.RefObject<HTMLVideoElement>
): [
  VideoPlayerState,
  (videoId: number) => void,
  (videoData: VideoData) => void,
  () => void,
  (isVideoReady: boolean) => void
] => {
  const [videoPlayerState, setPlayerState] = useState({
    videoId: 1,
    videoData: {
      author: "",
      id: 1,
      src: "",
      title: "",
    },
    isPlaying: false,
    isVideoReady: false
  });

  const setVideoId = (videoId: number) => {
    setPlayerState((prevPlayerState) => ({
      ...prevPlayerState,
      videoId,
    }));
  };

  const setVideoData = (videoData: VideoData) => {
    setPlayerState((prevPlayerState) => ({
      ...prevPlayerState,
      videoData,
    }));
  };

  const togglePlay = () => {
    setPlayerState((prevPlayerState) => ({
      ...prevPlayerState,
      isPlaying: !prevPlayerState.isPlaying,
    }));
  };

  useEffect(() => {
    if (videoElement && videoElement.current) {
      videoPlayerState.isPlaying
        ? videoElement.current.play()
        : videoElement.current.pause();
    }
  }, [videoPlayerState.isPlaying, videoElement]);


  const setIsVideoReady = (isVideoReady: boolean) => {
    setPlayerState((prevPlayerState) => ({
      ...prevPlayerState,
      isVideoReady,
    }));
  };

  return [
    videoPlayerState,
    setVideoId,
    setVideoData,
    togglePlay,
    setIsVideoReady
  ];
};

export default useVideoPlayer;
