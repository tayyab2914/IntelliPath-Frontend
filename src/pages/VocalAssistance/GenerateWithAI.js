import { Divider, Input } from "antd";
import React, { useEffect, useState } from "react";
import MyButton from "../../components/Button/Button";
import MyIcon from "../../components/Icon/MyIcon";
import { API_GENERATE_ON_DEMAND_CONTENT } from "../../apis/ContentGenApis";
import { useSelector } from "react-redux";
import useSpeech from "../../utils/WebSpeech.js/functionalities/useSpeech";
import CustomSpinner from "../../components/Loader/CustomSpinner";

const GenerateWithAI = ({ setGenerateWithAI_Enabled }) => {
  const { token } = useSelector((state) => state.authToken);
  const { speakWord } = useSpeech({ isInSpeechMode: true });
  const [text, setText] = useState("");
  const [AIResponse, setAIResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const generateHandler = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const response = await API_GENERATE_ON_DEMAND_CONTENT(token, text);
      setAIResponse(response?.response || "No response from AI.");
    } catch (err) {
      setError("Failed to generate response. Please try again.");
    } finally {
      setLoading(false);
    }
  };

const cleanText = (text) => {
  return text.replace(/[^\w\s.]/g, "").replace(/\s+/g, " ").trim(); // Keep the period (.)
};


  const speakHandler = () => {
    if (AIResponse) speakWord(cleanText(AIResponse));
  };

  return (
    <div data-aos="fade-right" className="vocal-assistance-ai-generator">
      <p className="vocal-assistance-upload-label">
        <span className="generate-with-ai-btn">
          <MyIcon type="shineAccent" /> Generate Using AI
        </span>
      </p>
      {loading && (
        <CustomSpinner />
      )}
      {!loading && AIResponse && (
        <div className="vocal-assistance-response">
          <Divider />
          <p>{AIResponse}</p>
        </div>
      )}
      <Input
        placeholder="Search something..."
        className="vocal-assistance-text-input"
        value={text}
        onChange={handleTextChange}
        addonAfter={
          <button
            className="inline-generate-btn"
            onClick={generateHandler}
            disabled={loading}
            
          >
            {loading ? <span className="chat-loader"></span> : "Generate"}
          </button>
        }
      />

      {error && <p className="error-message">{error}</p>}

        <MyButton
          text="Start Speaking"
          onClick={speakHandler}
          className="vocal-assistance-speak-button"
          disabled={!AIResponse}
        />
      <Divider className="vocal-assistance-divider">
        <p>or</p>
      </Divider>

      <div className="vocal-assistance-btn-group">
        <MyButton
          text="Upload Text"
          variant="outlined-dark"
          onClick={() => setGenerateWithAI_Enabled(false)}
          style={{ marginBottom: "5px" }}
        />

      </div>
    </div>
  );
};

export default GenerateWithAI;
