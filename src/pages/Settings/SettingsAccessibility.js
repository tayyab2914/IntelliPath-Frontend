import React from 'react';
import './styles/Settings.css';
import { Divider, Switch } from 'antd';

const SettingsAccessibility = ({ setSettingsData, SettingsData }) => {
  
  const handleBlindModeChange = (checked) => {
    setSettingsData({  ...SettingsData, blindMode: checked,  });
  };

  return (
    <div>
      <p className='settings-heading'>Accessibility</p>
      <Divider/>

      <div className="setting-item">
        <span className="setting-label">
          Enable Blind Mode
        </span>
        <Switch
          checked={SettingsData.blindMode || false}
          onChange={handleBlindModeChange} 
        />
      </div>
    </div>
  );
};

export default SettingsAccessibility;
