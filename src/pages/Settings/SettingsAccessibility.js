import React from "react";
import "./styles/Settings.css";
import { Divider, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setBlindMode } from "../../redux/AuthToken/Action";

const SettingsAccessibility = ({ setSettingsData, SettingsData }) => {
  const dispatch = useDispatch();
  
  // Extract state from Redux
  const { token,blind_mode, isLoggedIn } = useSelector((state) => state.authToken);

  // Determine the current blind mode status
  const currentBlindMode = isLoggedIn
    ? SettingsData?.is_blindmode || false
    : blind_mode;

  // Handle the switch toggle
  const handleBlindModeChange = (checked) => {
    if (isLoggedIn) {
      // Update local state for logged-in users
      setSettingsData({ ...SettingsData, is_blindmode: checked });
    } else {
      // Dispatch Redux action for non-logged-in users
      dispatch(setBlindMode(checked));
    }
  };

  return (
    <div>
      <p className="settings-heading">Accessibility</p>
      <Divider />
      <div className="setting-item">
        <span className="setting-label">Enable Blind Mode</span>
        <Switch
          checked={currentBlindMode}
          onChange={handleBlindModeChange}
        />
      </div>
    </div>
  );
};

export default SettingsAccessibility;
