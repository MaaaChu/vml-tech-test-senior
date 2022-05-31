import React from "react";
import Lottie from "lottie-react";
import spinnerAnimation from "../../assets/spinner.json";

const VideoPlayerLoading = (): JSX.Element => {
  return (
    <Lottie animationData={spinnerAnimation} loop={true} autoplay={true} />
  );
};

export default VideoPlayerLoading;
