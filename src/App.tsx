import React from "react";
import Button from "./components/button/Button";
import { Container } from "./components/container/Container";

const alertUser = () => {
  alert("here");
};

const App: React.FC = () => {
  return (
    <Container>
      <Button isBtnDisabled={false} btnOnClick={alertUser}>
        Play
      </Button>
    </Container>
  );
};

export default App;
