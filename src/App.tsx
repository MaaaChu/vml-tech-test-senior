import React, { useEffect, useRef } from "react";
import axios from "axios";

import { Container } from "./components/container/Container";
import Layout from "./components/Layout/Layout";
import VideoSection from "./components/videoSection/VideoSection";
import CommentsSection from "./components/commentsSection/CommentsSection";

import useVideoPlayer from "./hooks/useVideoPlayer";
import { VIDEO_URL } from "./constants";

const App: React.FC = () => {
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const [
    videoPlayerState,
    setVideoId,
    setVideoData,
    togglePlay,
    toggleMute,
    handleVideoSpeed,
    setIsLoading,
    setError,
  ] = useVideoPlayer(videoElementRef);

  const fetchVideo = () => {
    axios
      .get(`${VIDEO_URL}${videoPlayerState.videoId}`)
      .then((response) => {
        if (response.status !== 200) {
          setError("Unsuccessful response when fetching video");
        } else {
          setVideoData(response.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setError(`Could fetch video ${error}`);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchVideo();
  }, [videoPlayerState.videoId]);

  const checkIsVideoReady = () => {
    return !videoPlayerState.isLoading && videoPlayerState.error.length <= 0;
  };

  return (
    <Container>
      <Layout>
        <VideoSection
          videoPlayerState={videoPlayerState}
          videoElementRef={videoElementRef}
          togglePlay={togglePlay}
        />
        <CommentsSection
          videoId={videoPlayerState.videoId}
          isVideoReady={checkIsVideoReady()}
        />
      </Layout>
    </Container>
  );
};

export default App;
