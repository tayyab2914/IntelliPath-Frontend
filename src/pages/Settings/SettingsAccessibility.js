import React from "react";
import "./styles/Settings.css";
import { Divider, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setBlindMode } from "../../redux/AuthToken/Action";

const SettingsAccessibility = ({ setSettingsData, SettingsData }) => {
  const dispatch = useDispatch();

  const { token, blind_mode, isLoggedIn } = useSelector( (state) => state.authToken );
  const currentBlindMode = isLoggedIn ? SettingsData?.is_blindmode || false : blind_mode;

  const handleBlindModeChange = (checked) => {
    const booleanValue = Boolean(checked); 
    if (isLoggedIn) {
      setSettingsData({ ...SettingsData, is_blindmode: booleanValue });
    } else {
      dispatch(setBlindMode(booleanValue));
    }
  };

  return (
    <div>
    <p className="settings-heading">Accessibility</p>
    <Divider />
      <div className="setting-item">
        <Switch checked={currentBlindMode} onChange={handleBlindModeChange} className="blind-mode-switch"/>
        <span className="setting-label">Blind Mode</span>
      </div>
    </div>
  );
};

export default SettingsAccessibility;
