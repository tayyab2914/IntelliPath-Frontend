import React from 'react';
import { Card, Typography } from 'antd';

const { Paragraph } = Typography;

const FeatureCard = ({ title, description }) => {
  return (
    <Card title={title} bordered={false} className="about-feature-card">
      <Paragraph>{description}</Paragraph>
    </Card>
  );
};

export default FeatureCard; 