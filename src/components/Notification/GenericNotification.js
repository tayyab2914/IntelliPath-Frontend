import React, { useEffect } from 'react';
import { notification, Button, Space } from 'antd';
import MyButton from '../Button/Button';

const GenericNotification = ({ type='info',message, description, buttons = [], duration = 0 }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    const key = `notification_${Date.now()}`;
    
    api[type]({
      message,
      description,
      btn: buttons.length > 0 ? (
          buttons.map((btn, index) => (
            <MyButton key={index} text={btn.label} onClick={btn.onClick}/>
          ))
      ) : null,
      key,
      duration, 
    });
  };

  useEffect(()=>{
    openNotification()
  },[])
  return (
    <>
      {contextHolder}
    </>
  );
};

export default GenericNotification;
