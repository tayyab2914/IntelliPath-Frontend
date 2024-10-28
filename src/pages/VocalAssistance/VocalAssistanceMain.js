import React, { useEffect, useState } from "react";
import { Col, Divider, Row, Upload, Input } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import NavbarMain from "../../components/Navbar/NavbarMain";
import Footer from "../../components/Footer/Footer";
import TitleMain from "../../components/Title/TitleMain";
import MyButton from "../../components/Button/Button";
import "./styles/VocalAssistance.css";
import GenerateWithAI from "./GenerateWithAI";
import ConvertText from "./ConvertText";


const VocalAssistanceMain = () => {
  const [GenerateWithAI_Enabled, setGenerateWithAI_Enabled] = useState(true);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


  return (
    <>
      <NavbarMain />
      <div className="generic-container">
        <TitleMain title={"Vocal Assistance"} description={ "A vocal assistance component that enhances accessibility by offering both TTS for user-uploaded content and AI-generated content, supporting IntelliPath's adaptive learning goals." } />

        <Row justify={"center"}>
          <Col xs={24} sm={20} md={18} lg={12} xl={10} className={` vocal-assistance-main-outer `} >
       
              {GenerateWithAI_Enabled ? 
                    <GenerateWithAI setGenerateWithAI_Enabled={setGenerateWithAI_Enabled} /> 
                    :
                    <ConvertText setGenerateWithAI_Enabled={setGenerateWithAI_Enabled} />
               }
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default VocalAssistanceMain;
