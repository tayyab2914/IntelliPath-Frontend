import { Divider, Input } from "antd";
import React, { useState } from "react";
import MyButton from "../../components/Button/Button";
import MyIcon from "../../components/Icon/MyIcon";

const GenerateWithAI = ({setGenerateWithAI_Enabled}) => {
    const [text, setText] = useState("");
    const speakHandler = () => {
      // Implement text-to-speech functionality here
      console.log(text)
      console.log("Text-to-Speech triggered");
    };
  return (
    <div data-aos="fade-right" className="vocal-assistance-ai-generator" >
      <p className="vocal-assistance-upload-label"><span className="generate-with-ai-btn"><MyIcon type={'shineAccent'} /> Generate Using AI</span></p>
        <Input.TextArea placeholder="Search something..." className="vocal-assistance-text-input" value={text} rows={4} onChange={(e) => setText(e.target.value)} />
      <Divider className="vocal-assistance-divider">
        <p>or</p>
      </Divider>

      <MyButton text={"Upload Text"} variant="outlined-dark" onClick={() => setGenerateWithAI_Enabled(false)} className="vocal-assistance-ai-button" />

      <MyButton text={"Start Speaking"} onClick={speakHandler} className="vocal-assistance-speak-button" />
    </div>
  );
};

export default GenerateWithAI;
