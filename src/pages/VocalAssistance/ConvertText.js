import React, { useState } from "react";
import { Col, Divider, Row, Upload, Input, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import pdfToText from "react-pdftotext";
import MyButton from "../../components/Button/Button";
import MyIcon from "../../components/Icon/MyIcon";
import useSpeech from "../../utils/WebSpeech.js/functionalities/useSpeech";
const { Dragger } = Upload;

const ConvertText = ({ setGenerateWithAI_Enabled }) => {
  const [text, setText] = useState("");
  const { speakWord } = useSpeech({ isInSpeechMode: true });


  const props = {
    name: "file",
    multiple: false,
    beforeUpload: (file) => {
      if (file.type !== "application/pdf") {
        message.error(`${file.name} is not a PDF file.`);
        return Upload.LIST_IGNORE;
      }
      return true;
    },
    onChange(info) {
      const { status, originFileObj } = info.file;
      if (status === "done" || status === "uploading") {
        extractTextFromPDF(originFileObj);
      } else if (status === "error") {
        console.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const extractTextFromPDF = (file) => {
    pdfToText(file).then((text) => {
        const cleanedText = cleanText(text);
        setText(cleanedText);
      })
      .catch((error) => console.error("Failed to extract text from PDF", error));
  };

  const cleanText = (text) => {
    return text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").trim();
  };

  const speakHandler = () => {
    if (text) {
        speakWord(text)
    } else {
      console.log("No text available to speak");
    }
  };

  return (
    <div className="vocal-assistance-main" data-aos="fade-right">
      <p className="vocal-assistance-upload-label">Upload Text</p>
      <div>
        <Input.TextArea placeholder="Type or paste your text here" className="vocal-assistance-text-input" rows={7} value={text} onChange={(e) => setText(e.target.value)} />
      </div>

      <Divider className="vocal-assistance-divider"> <p>or</p> </Divider>

      <Dragger {...props} itemRender={()=><></>} className="vocal-assistance-dragger">
        <p className="ant-upload-drag-icon"> <InboxOutlined /> </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint"> Support for single PDF upload. Strictly prohibited from uploading company data or other banned files. </p>
      </Dragger>

      <Divider className="vocal-assistance-divider"> <p>or</p> </Divider>

      <MyButton text={<span className="generate-with-ai-btn"><MyIcon type={'shineAccent'} />Generate with AI</span>} variant="outlined-dark" onClick={() => setGenerateWithAI_Enabled(true)} className="vocal-assistance-ai-button" />
      <MyButton text={"Start Speaking"} onClick={speakHandler} className="vocal-assistance-speak-button" />
    </div>
  );
};

export default ConvertText;
