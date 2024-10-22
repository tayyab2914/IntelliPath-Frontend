import React from 'react';
import './styles/Settings.css';
import { Col, Divider, Row } from 'antd';

const SettingsBasicInfo = ({ setSettingsData, SettingsData }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;

    setSettingsData({ ...SettingsData, [name]: value});
  };

  return (
    <div>
      <p className='settings-heading'>Basic Info</p>
      <Divider/>
      <Row>
        <Col xs={5}  sm={3} lg={2} >
            <p className='setting-label'>Name</p>
            <p className='setting-label'>Age</p>
            <p className='setting-label'>Linkedin</p>
        </Col>
        <Col xs={19} sm={21} lg={22}>
            <div className="setting-item">
                <input  type="text"  id="name"  name="name"  value={SettingsData.name || ''}  onChange={handleChange}  className="setting-input" />
            </div>

            <div className="setting-item">
                <input  type="number"  id="age"  name="age"  value={SettingsData.age || ''}  onChange={handleChange}  className="setting-input" />
            </div>

            <div className="setting-item">
                <input  type="url"  id="linkedin_link"  name="linkedin_link"  value={SettingsData.linkedin_link || ''} onChange={handleChange}  className="setting-input" />
            </div>
        </Col>
      </Row>
    </div>
  );
};

export default SettingsBasicInfo;
