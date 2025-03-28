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
import MyButton from "../../components/Button/Button";
import { setRerenderApp } from "../../redux/AuthToken/Action";
import { Col, message, Row } from "antd";
import { DEFAULT_BUTTON_HEIGHT } from "../../utils/GlobalSettings";

const SettingsMain = () => {
  const { token, isLoggedIn, user_attributes, rerender_app } = useSelector( (state) => state.authToken );
  const dispatch = useDispatch();
  const [SettingsData, setSettingsData] = useState({});

  const fetchSettings = async () => {
    const response = await API_GET_USER_ATTRIBUTE(token);
    setSettingsData(response);
    dispatch(setRerenderApp(!rerender_app));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchSettings();
  }, []);

  const handleSave = async () => {
    const formData = new FormData();
    Object.keys(SettingsData).forEach((key) => {
      let value = SettingsData[key] ?? "0";

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
  };

  const handleDiscard = () => {
    fetchSettings();
    console.log("Changes discarded. Reset to initial settings.");
  };
  return (
    <>
      <NavbarMain />
      <div className="generic-container">
        <div className="settings-wrapper">
          <div className="settings-main">
            <TitleMain title="Settings" description="Manage your preferences and update your account details!" />
            <SettingsAccessibility setSettingsData={setSettingsData} SettingsData={SettingsData} />
            {isLoggedIn && (
              <>
                <SettingsBasicInfo setSettingsData={setSettingsData} SettingsData={SettingsData} />
                <SettingsProfile setSettingsData={setSettingsData} SettingsData={SettingsData} />
                <SettingsLinked setSettingsData={setSettingsData} SettingsData={SettingsData} />

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
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SettingsMain;
