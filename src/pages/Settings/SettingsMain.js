import React, { useEffect } from 'react'
import { useState } from 'react';
import NavbarMain from "../../components/Navbar/NavbarMain";
import Footer from '../../components/Footer/Footer';
import TitleMain from '../../components/Title/TitleMain';
import SettingsAccessibility from './SettingsAccessibility';
import SettingsBasicInfo from './SettingsBasicInfo';
import SettingsProfile from './SettingsProfile';
import SettingsLinked from './SettingsLinked';
import { Divider, Button } from 'antd';
import MyButton from '../../components/Button/Button';

const SettingsMain = () => {
    const initialSettings = {
        blind_mode: true,
        name: "Muhaman Ijaz",
        age: 18,
        linkedin_link: "https://muhamanijaz.linkedin.com",
        display_image: "",
        github_link: "https://muhamanijaz.linkedin.com",
    };

    const [SettingsData, setSettingsData] = useState(initialSettings);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    useEffect(() => {
        setSettingsData(initialSettings);
    }, []);

    const handleSave = () => {
        console.log("Settings saved:", SettingsData);
    };

    const handleDiscard = () => {
        setSettingsData(initialSettings);
        console.log("Changes discarded. Reset to initial settings.");
    };

    return (
        <>
            <NavbarMain />
            <div className="generic-container">
                <div className="settings-main">
                    <TitleMain title="Settings" description="Manage your preferences and update your account details!" />
                    <SettingsAccessibility setSettingsData={setSettingsData} SettingsData={SettingsData} />
                    <SettingsBasicInfo setSettingsData={setSettingsData} SettingsData={SettingsData} />
                    <SettingsProfile setSettingsData={setSettingsData} SettingsData={SettingsData} />
                    <SettingsLinked setSettingsData={setSettingsData} SettingsData={SettingsData} />
                    

                    <div className="settings-buttons">
                        <MyButton variant="filled" text={'Save'} w='170px' m='0px 10px 0px 0px' onClick={handleSave}></MyButton>
                        <MyButton variant="outlined-dark" text={'Discard'} w='170px' onClick={handleDiscard}></MyButton>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SettingsMain;
