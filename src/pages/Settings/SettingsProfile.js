import React, { useEffect, useState } from 'react';
import './styles/Settings.css';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Divider, message, Upload } from 'antd';
import { DOMAIN_NAME } from '../../utils/GlobalSettings';
import { ICONS } from '../../data/IconData';

const SettingsProfile = ({ setSettingsData, SettingsData }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('You can only upload image files!');
    }
    return isImage || Upload.LIST_IGNORE; // prevent invalid files from triggering `customRequest`
  };

  const handlePreview = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
      setSettingsData({ ...SettingsData, profile_picture: file });
    };
    reader.readAsDataURL(file);
  };

  // Sync preview when `SettingsData.profile_picture` changes
  useEffect(() => {
    if (!SettingsData?.profile_picture) {
      setPreviewImage(null);
    } else if (SettingsData.profile_picture instanceof File) {
      const objectUrl = URL.createObjectURL(SettingsData.profile_picture);
      setPreviewImage(objectUrl);

      return () => URL.revokeObjectURL(objectUrl); // cleanup
    } else {
      setPreviewImage(`${DOMAIN_NAME}${SettingsData.profile_picture}`);
    }
  }, [SettingsData?.profile_picture]);

  return (
    <div>
      <p className='settings-heading'>Profile</p>
      <Divider />
      <div className="profile-image-container">
        {previewImage ? (
          <img src={previewImage} alt={ICONS.avatar} className="settings-profile-image" />
        ) : (
          <img src={ICONS.avatar}  className="settings-profile-image" />
        )}

        <Upload
          accept="image/*"
          showUploadList={false}
          beforeUpload={beforeUpload}
          customRequest={({ file, onSuccess }) => {
            handlePreview(file);
            onSuccess(); // instantly trigger success (no server)
          }}
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </div>
    </div>
  );
};

export default SettingsProfile;
