import React from 'react';
import { Card, Typography, Tag } from 'antd';

const { Title, Paragraph } = Typography;

const TeamMember = ({ name, regNo, role, image }) => {
  return (
    <Card
      className="about-member-card"
      cover={
        <img
          alt={name}
          src={image}
          className="about-member-image"
        />
      }
    >
      <Title level={4}>{name}</Title>
      <Paragraph><b>Reg No:</b> {regNo}</Paragraph>
      <Tag color="cyan">{role}</Tag>
    </Card>
  );
};

export default TeamMember; 