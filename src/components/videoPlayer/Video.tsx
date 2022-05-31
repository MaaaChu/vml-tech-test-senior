import React from "react";
import { VideoPlayerState } from "../../types";

interface VideoProps {
  videoElementRef?: React.RefObject<HTMLVideoElement>;
  videoPlayerState: VideoPlayerState;
}

const Video: React.FC<VideoProps> = ({ videoElementRef, videoPlayerState }) => {
  return (
    <video ref={videoElementRef} controls={false}>
      <source src={videoPlayerState.videoData.src} type="video/webm"></source>
    </video>
  );
};

export default Video;
