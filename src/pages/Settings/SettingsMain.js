import React, { useEffect, useState } from "react";
import NavbarMain from "../../components/Navbar/NavbarMain";
import Footer from "../../components/Footer/Footer";
import TitleMain from "../../components/Title/TitleMain";
import SettingsAccessibility from "./SettingsAccessibility";
import SettingsBasicInfo from "./SettingsBasicInfo";
import SettingsProfile from "./SettingsProfile";
import SettingsLinked from "./SettingsLinked";
import { useDispatch, useSelector } from "react-redux";
import { API_GET_USER_ATTRIBUTE, API_UPDATE_USER_ATTRIBUTE } from "../../apis/CoreApis";
import { setRerenderApp } from "../../redux/AuthToken/Action";
import { Col, Form, message, Row } from "antd";
import { DEFAULT_BUTTON_HEIGHT } from "../../utils/GlobalSettings";
import CustomSpinner from "../../components/Loader/CustomSpinner";

const SettingsMain = () => {
  const { token, isLoggedIn, rerender_app } = useSelector( (state) => state.authToken );
  const dispatch = useDispatch();
  const [SettingsData, setSettingsData] = useState({});
  const [form] = Form.useForm(); 
const [ShowSpinner, setShowSpinner] = useState(false);

  const fetchSettings = async () => {
    setShowSpinner(true)
    const response = await API_GET_USER_ATTRIBUTE(token);
    setSettingsData(response);
    dispatch(setRerenderApp(!rerender_app));
    setShowSpinner(false)
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchSettings();
  }, []);

  const handleSave = async () => {
  try {
    await form.validateFields();    

    const formData = new FormData();
    Object.keys(SettingsData).forEach((key) => {
      let value = SettingsData[key] ?? "";

      if (key === "profile_picture" && value instanceof File) {
        formData.append(key, value);
      } else if (key === "is_blindmode") {
        formData.append(key, value === true ? "True" : "False");
      } else {
        formData.append(key, value);
      }
    });

    await API_UPDATE_USER_ATTRIBUTE(token, formData, null);
    fetchSettings();
  } catch (error) {
    message.error("Please fix validation errors before saving.");
  }
};


  const handleDiscard = () => {     
    fetchSettings();        
  };
  return (  
    <>  
      <NavbarMain />    
      {ShowSpinner && <CustomSpinner fullscreen={true}/>}       
      <div className="generic-container">
        <div className="settings-wrapper">
          <div className="settings-main">
            <TitleMain title="Settings" description="Manage your preferences and update your account details!" />
            
            {isLoggedIn ? (
              <>
              <Row>
                <Col xs={24} md={12}>
                  <SettingsBasicInfo form={form} setSettingsData={setSettingsData} SettingsData={SettingsData} />
                </Col>
                <Col xs={24} md={12}>
                  <SettingsAccessibility setSettingsData={setSettingsData} SettingsData={SettingsData} /> 
                  <SettingsProfile setSettingsData={setSettingsData} SettingsData={SettingsData} />
                  <SettingsLinked setSettingsData={setSettingsData} SettingsData={SettingsData} fetchSettings={fetchSettings} />
                </Col>
              </Row>
                

                <div id="settings-buttons">
                  <Row style={{width:"100%"}} gutter={[10,10]}>
                    <Col xs={12}>
                      <button onClick={handleSave} className="save" style={{height:DEFAULT_BUTTON_HEIGHT}}>Save</button>
                    </Col>
                    <Col xs={12}>
                      <button onClick={handleDiscard} className="discard" style={{height:DEFAULT_BUTTON_HEIGHT}}>Discard</button>
                    </Col>
                  </Row>
                </div>
              </>
            ):<Row>
                <Col xs={24} md={12}>
                  <SettingsAccessibility setSettingsData={setSettingsData} SettingsData={SettingsData} /> 
                </Col>
              </Row>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SettingsMain;
