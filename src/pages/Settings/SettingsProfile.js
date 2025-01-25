import React, { useState } from 'react';
import './styles/Settings.css';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Divider, message, Upload } from 'antd';
import { DOMAIN_NAME } from '../../utils/GlobalSettings';

const SettingsProfile = ({ setSettingsData, SettingsData }) => {
  const [imagePreview, setImagePreview] = useState(SettingsData.profile_picture || '');

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('You can only upload image files!');
    }
    return isImage;
  };

  const handlePreview = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
      setSettingsData({ ...SettingsData, profile_picture: reader.result, });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <p className='settings-heading'>Profile</p>
<Divider/>
      <div className="profile-image-container">
        {imagePreview ? (
          <img src={`${DOMAIN_NAME}${imagePreview}`} alt="Profile" className="settings-profile-image" />
        ) : (     
        <span className="setting-label">Display Image </span>
        )}
        <Upload
          accept="image/*"
          showUploadList={false}
          beforeUpload={beforeUpload}
          customRequest={({ file, onSuccess }) => {
            handlePreview(file);
            onSuccess(); 
          }}
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </div>
    </div>
  );
};

export default SettingsProfile;
