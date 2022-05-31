import React, { useEffect, useRef } from "react";

import { Container } from "./components/container/Container";
import Layout from "./components/Layout/Layout";
import VideoSection from "./components/videoSection/VideoSection";
import CommentsSection from "./components/commentsSection/CommentsSection";

import useVideoPlayer from "./hooks/useVideoPlayer";
import { VIDEO_URL } from "./constants";
import useFetch from "./hooks/useFetch";

const App: React.FC = () => {
  const videoElementRef = useRef<HTMLVideoElement>(null);

  const [
    videoPlayerState,
    setVideoId,
    setVideoData,
    togglePlay,
    setIsVideoReady,
  ] = useVideoPlayer(videoElementRef);

  const {
    data: videoData,
    isLoading,
    error,
    fetchUrl,
  } = useFetch(`${VIDEO_URL}${videoPlayerState.videoId}`);

  useEffect(() => {
    if (error.length <= 0 && !isLoading && videoData) {
      setIsVideoReady(true);
      setVideoData({ ...videoData });
    }
  }, [videoData]);

  useEffect(() => {
    setIsVideoReady(false);
    fetchUrl();
  }, [videoPlayerState.videoId]);

  return (
    <Container>
      <Layout>
        <VideoSection
          videoPlayerState={videoPlayerState}
          videoElementRef={videoElementRef}
          togglePlay={togglePlay}
          isLoading={isLoading}
          error={error}
        />
        <CommentsSection
          videoId={videoPlayerState.videoId}
          isVideoReady={videoPlayerState.isVideoReady}
        />
      </Layout>
    </Container>
  );
};

export default App;
