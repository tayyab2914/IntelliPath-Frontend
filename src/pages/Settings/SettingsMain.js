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

const SettingsMain = () => {
  const { token, isLoggedIn,user_attributes,rerender_app} = useSelector((state) => state.authToken);
const dispatch = useDispatch()
  const [SettingsData, setSettingsData] = useState({});
  
  const fetchSettings = async () => {
    const response = await API_GET_USER_ATTRIBUTE(token);
    setSettingsData(response);
    dispatch(setRerenderApp(!rerender_app))
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchSettings()
  }, []);

  const handleSave = async () => {
    const formData = new FormData();
    
    Object.keys(SettingsData).forEach((key) => {
      if (key === "display_image" && SettingsData[key] instanceof File) {
        formData.append(key, SettingsData[key]);
      } else {
        formData.append(key, SettingsData[key]);
      }
    });

    await API_UPDATE_USER_ATTRIBUTE(token,SettingsData,null)
    fetchSettings()
  };
  
  const handleDiscard = () => {
    fetchSettings()
    console.log("Changes discarded. Reset to initial settings.");
  };
    return (
        <>
            <NavbarMain />
            <div className="generic-container">
                <div className="settings-main">
                    <TitleMain title="Settings" description="Manage your preferences and update your account details!" />
                    <SettingsAccessibility setSettingsData={setSettingsData} SettingsData={SettingsData} />
                    {isLoggedIn && <>
                        <SettingsBasicInfo setSettingsData={setSettingsData} SettingsData={SettingsData} />
                        <SettingsProfile setSettingsData={setSettingsData} SettingsData={SettingsData} />
                        <SettingsLinked setSettingsData={setSettingsData} SettingsData={SettingsData} />
                    

                    <div className="settings-buttons">
                        <MyButton variant="filled" text={'Save'} w='200px' m='0px 10px 0px 0px' onClick={handleSave}></MyButton>
                        <MyButton variant="outlined-dark" text={'Discard'} w='200px' onClick={handleDiscard}></MyButton>
                    </div>
                        </>
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SettingsMain;
