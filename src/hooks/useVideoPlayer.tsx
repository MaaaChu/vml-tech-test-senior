import React, { useState, useEffect } from "react";

import { VideoPlayerState, VideoData } from "../types";

const useVideoPlayer = (
  videoElement: React.RefObject<HTMLVideoElement>
): [
  VideoPlayerState,
  (videoId: number) => void,
  (videoData: VideoData) => void,
  () => void,
  () => void,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  (isLoading: boolean) => void,
  (error: string) => void
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
    progress: 0,
    speed: 1,
    isMuted: false,
    isLoading: true,
    error: "",
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

  const toggleMute = () => {
    setPlayerState((prevPlayerState) => ({
      ...prevPlayerState,
      isMuted: !prevPlayerState.isMuted,
    }));
  };

  useEffect(() => {
    if (videoElement && videoElement.current) {
      videoPlayerState.isMuted
        ? (videoElement.current.muted = true)
        : (videoElement.current.muted = false);
    }
  }, [videoPlayerState.isMuted, videoElement]);

  const handleVideoSpeed = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSpeed = Number(event.target.value);
    if (videoElement && videoElement.current) {
      setPlayerState({
        ...videoPlayerState,
        speed: newSpeed,
      });
    } else {
      // TODO: throw error
    }
  };

  const setIsLoading = (isLoading: boolean) => {
    setPlayerState((prevPlayerState) => ({
      ...prevPlayerState,
      isLoading,
    }));
  };

  const setError = (error: string) => {
    setPlayerState((prevPlayerState) => ({
      ...prevPlayerState,
      error,
    }));
  };

  return [
    videoPlayerState,
    setVideoId,
    setVideoData,
    togglePlay,
    toggleMute,
    handleVideoSpeed,
    setIsLoading,
    setError,
  ];
};

export default useVideoPlayer;
