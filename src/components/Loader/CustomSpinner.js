import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import './styles/CustomSpinner.css';

const { Text } = Typography;

const CustomSpinner = ({ messages = [], intervalMs = 3000, fullscreen = false }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!messages?.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages?.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [messages, intervalMs]);

  return (
    <div className={`custom-spinner-wrapper ${fullscreen ? 'fullscreen-spinner' : ''} `} >
      <div className="spinner" />
      {messages?.length > 0 && (
        <div style={{ marginTop: "2rem" }}>
          <Text type="secondary">{messages[index]}</Text>
        </div>
      )}
    </div>
  );
};

export default CustomSpinner;
