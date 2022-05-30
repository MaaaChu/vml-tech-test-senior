import React, { useEffect, useRef } from "react";
import axios from "axios";

import { Container } from "./components/container/Container";
import Layout from "./components/Layout/Layout";
import VideoInfo from "./components/videoInfo/VideoInfo";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";

import useVideoPlayer from "./hooks/useVideoPlayer";
import CommentsSection from "./components/commentsSection/CommentsSection";

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
  ] = useVideoPlayer(videoElementRef);

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
        setVideoData(response.data);
        setIsLoading(false);
      });
  }, [videoPlayerState.videoId]);

  return (
    <Container>
      <Layout>
        <div>
          <VideoPlayer
            videoPlayerState={videoPlayerState}
            videoElementRef={videoElementRef}
            togglePlay={togglePlay}
          />
          <VideoInfo
            videoTitle={videoPlayerState.videoData.title}
            videoAuthor={videoPlayerState.videoData.author}
          />
        </div>

        <CommentsSection />
      </Layout>
    </Container>
  );
};

export default App;
