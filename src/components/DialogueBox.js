import "../App.css";
import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

const DialogueBox = () => {
  const [message, setMessage] = useState("");
  const [text, setText] = useState();
  const [isCopied, setIsCopied] = useClipboard("text to copy");
  const commands = [
    {
      command: "I would like to order *",
      callback: (food) => setMessage(`Your order is for: ${food}`),
    },
    {
      command: "The weather is :condition today",
      callback: (condition) => setMessage(`Today, the weather is ${condition}`),
    },
    {
      command: "My top sports are * and *",
      callback: (sport1, sport2) => setMessage(`#1: ${sport1}, #2: ${sport2}`),
    },
    {
      command: "Pass the salt (please)",
      callback: () => setMessage("My pleasure"),
    },
    {
      command: ["Hello", "Hi"],
      callback: ({ command }) => setMessage(`Hi there! You said: "${command}"`),
      matchInterim: true,
    },
    {
      command: "Beijing",
      callback: (command, spokenPhrase, similarityRatio) =>
        setMessage(
          `${command} and ${spokenPhrase} are ${similarityRatio * 100}% similar`
        ),
      // If the spokenPhrase is "Benji", the message would be "Beijing and Benji are 40% similar"
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
    },
    {
      command: ["eat", "sleep", "leave"],
      callback: (command) => setMessage(`Best matching command: ${command}`),
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true,
    },
    {
      command: "clear",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
  ];
  const {
    transcript,
    browserSupportsSpeechRecognition,
    browserSupportsContinuousListening,
  } = useSpeechRecognition({ commands });
  if (browserSupportsContinuousListening) {
    SpeechRecognition.startListening({ continuous: true });
  } else if (!browserSupportsSpeechRecognition) {
  }
  return (
    <>
      <div className="container">
        <h2>Enter your prompts</h2>
        <br />
        <p>
          Unleash the power of AI to take your debating skills to next level.
        </p>
        <div>
          <div className="main-content">
            <p>{message}</p>
            <p>{transcript}</p>
          </div>
          <div className="btn-style">
            {/* <button> Copy </button> */}
            <button onClick={SpeechRecognition.startListening}>
              Start Listening
            </button>
            <button onClick={SpeechRecognition.stopListening}>
              Stop Listening
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogueBox;
