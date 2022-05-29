import React from "react";

import { Container } from "./components/container/Container";
import Layout from "./components/Layout/Layout";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";

const App: React.FC = () => {
  return (
    <Container>
      <Layout>
        <div>
          <VideoPlayer />
        </div>

        <div>
          <p>Comments section</p>
        </div>
      </Layout>
    </Container>
  );
};

export default App;
