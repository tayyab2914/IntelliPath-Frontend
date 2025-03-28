import React from 'react';
import './styles/Settings.css';
import { Col, Divider, Row } from 'antd';

const SettingsBasicInfo = ({ setSettingsData, SettingsData }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSettingsData({ ...SettingsData, [name]: value });
  };

  return (
    <div>
      <p className='settings-heading'>Basic Info</p>
      <Divider />
      <Row>
        <Col xs={6} sm={6} lg={4}>
          <p className='setting-label'>Name</p>
          <p className='setting-label'>Age</p>
          <p className='setting-label'>LinkedIn</p>
        </Col>
        <Col xs={18} sm={18} lg={20}>
          <div className="setting-item">
            <input type="text" id="first_name" name="first_name" value={SettingsData.first_name || ''} onChange={handleChange} className="setting-input" />
          </div>

          <div className="setting-item">
            <input type="number" id="age" name="age" value={SettingsData.age || ''} onChange={handleChange} className="setting-input"/>
          </div>

          <div className="setting-item">
            <input type="url" id="linkedin" name="linkedin" value={SettingsData.linkedin || ''} onChange={handleChange} className="setting-input"/>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SettingsBasicInfo;
