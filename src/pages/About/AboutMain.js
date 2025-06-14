import React, { useEffect } from "react";
import { Typography, Row, Col, Divider } from "antd";
import NavbarMain from "../../components/Navbar/NavbarMain";
import TeamMember from "./components/TeamMember";
import FeatureCard from "./components/FeatureCard";
import { teamMembers } from "./data/teamData";
import { features } from "./data/featuresData";
import './styles/About.css'     

const { Title, Paragraph, Text } = Typography;

const AboutMain = () => {   
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="about-container">
      <NavbarMain />

      <div className="about-content">
        <Typography>
          <Title level={2} className="about-title">
            About IntelliPath
          </Title>
          <Divider />
          <Title level={3} className="about-subtitle">
            Project Members
          </Title>

          <Row gutter={[16, 16]} justify="center" className="about-members-row">
            {teamMembers.map((member, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <TeamMember {...member} />
              </Col>
            ))}
          </Row>

          <Divider />
          <Paragraph className="about-description">
            <strong>IntelliPath</strong> is an AI-driven personalized learning platform that adapts to
            the unique educational needs of each learner. It generates dynamic learning
            roadmaps based on individual goals, skills, and interests—ensuring a targeted and
            effective journey towards knowledge and career growth.
          </Paragraph>

          <Row gutter={[16, 16]} className="about-features-row">
            {features.map((feature, index) => (
              <Col xs={24} md={feature.title === 'Smart Networking' ? 24 : 12} key={index}>
                <FeatureCard {...feature} />
              </Col>
            ))}
          </Row>

          <Divider />
          <Paragraph className="about-footer">
            IntelliPath is built by students of the University of Central Punjab as their BSCS Final Year Project, under the supervision of{" "}
            <Text strong>Mr. Muhammad Zulkifl Hasan</Text>.
          </Paragraph>
        </Typography>
      </div>
    </div>
  );
};

export default AboutMain;
