import React, { useState } from "react";
import Modal from "react-modal";
import "./DebateInfo.css";

const DebateInfo = ({ isOpen, onClose, onSubmit }) => {
  const [difficulty, setDifficulty] = useState(0);
  const [topic, setTopic] = useState("");

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(difficulty, topic);
    onClose();
  };

    return (
      <>
        <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
                contentLabel="Debate Dialog"
                style={{"width": "200px"}}
        >
          <div className="modal-container">
            <h2>Debate Settings</h2>
            <div className="labels">
              <div>
                <label>Difficulty (0-10):</label>
                <input
                  type="number"
                  value={difficulty}
                  onChange={handleDifficultyChange}
                />
              </div>
              <div>
                <label>Debate Topic:</label>
                <input type="text" value={topic} onChange={handleTopicChange} />
              </div>
            </div>
          </div>
          <button onClick={handleSubmit}>Close</button>
        </Modal>
      </>
    );
};

export default DebateInfo;
