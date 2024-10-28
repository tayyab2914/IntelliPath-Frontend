import React from "react";
import "./styles/Settings.css";
import { Divider, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setBlindMode } from "../../redux/BlindMode/Action";

const SettingsAccessibility = ({ setSettingsData, SettingsData }) => {
  const { token, isLoggedIn } = useSelector((state) => state.authToken);
  const { blindMode } = useSelector((state) => state.blindMode);
  const dispatch = useDispatch();
  const handleBlindModeChange = (checked) => {
    setSettingsData({ ...SettingsData, blindMode: checked });
    if (!isLoggedIn) {//!agr login nhi h to wrna redux wala settings set ho nhi to main me settings change hongi 
        dispatch(setBlindMode(checked))
    }
  };

  return (
    <div>
      <p className="settings-heading">Accessibility</p>
      <Divider />

      <div className="setting-item">
        <span className="setting-label">Enable Blind Mode</span>
        <Switch
          checked={isLoggedIn ? (SettingsData.blindMode || false) : blindMode} //!agr login hai to settings se aya hua data ho // wrna redux wala settings show ho
          onChange={handleBlindModeChange}
        />
      </div>
    </div>
  );
};

export default SettingsAccessibility;
