import { useEffect, useState } from 'react';
import './styles/Settings.css';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Divider, message, Upload } from 'antd';
import {  MEDIA_URL } from '../../utils/GlobalSettings';
import { ICONS } from '../../data/IconData';

const SettingsProfile = ({ setSettingsData, SettingsData }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('You can only upload image files!');
    }
    return isImage || Upload.LIST_IGNORE; 
  };

  const handlePreview = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
      setSettingsData({ ...SettingsData, profile_picture: file });
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (!SettingsData?.profile_picture) {
      setPreviewImage(null);
    } else if (SettingsData.profile_picture instanceof File) {
      const objectUrl = URL.createObjectURL(SettingsData.profile_picture);
      setPreviewImage(objectUrl);

      return () => URL.revokeObjectURL(objectUrl); 
    } else {
      setPreviewImage(`${MEDIA_URL}${SettingsData.profile_picture}`);
    }
  }, [SettingsData?.profile_picture]);

  return (
    <div>
      <p className='settings-heading'>Profile</p>
      <Divider />
      <div className="profile-image-container">
        {previewImage ? (
          <img src={previewImage} className="settings-profile-image" onError={(e) => { e.target.onerror = null; e.target.src = ICONS?.avatar }}/>
        ) : (
          <img src={ICONS.avatar}  className="settings-profile-image" onError={(e) => { e.target.onerror = null; e.target.src = ICONS?.avatar }}/>
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
