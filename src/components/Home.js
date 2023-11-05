import Typed from "react-typed";
import Header from "./Header";
import DebateInfo from "./DebateInfo";
import React, { useState } from "react";
const Home = () => {
  const [isDebateDialogOpen, setIsDebateDialogOpen] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState("");
  const openDialog = () => {
    setIsDebateDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDebateDialogOpen(false);
  };

  const handleDebateStart = (difficulty, topic) => {
    setSelectedDifficulty(difficulty);
    setSelectedTopic(topic);
  };
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="animated-typing">
          <Typed
            strings={[
              "Introducing DebateMaster",
              "Unleash the power of AI",
              "Enhance your debating powers",
              "Win arguments effortlessly",
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </div>

        <DebateInfo
          isOpen={isDebateDialogOpen}
          onClose={closeDialog}
          onSubmit={handleDebateStart}
        />
        <div className="debate-info" >
          <button onClick={openDialog}>Start a Debate</button>
          <h3>Selected Difficulty: {selectedDifficulty}</h3>
          <h3>Selected Topic: {selectedTopic}</h3>
        </div>
      </div>
    </>
  );
};

export default Home;
