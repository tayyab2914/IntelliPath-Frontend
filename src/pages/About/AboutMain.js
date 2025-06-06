import React, { useEffect } from "react";
import { Typography, Row, Col, Card, Divider, Tag } from "antd";
import NavbarMain from "../../components/Navbar/NavbarMain";
import { IMAGES } from "../../data/ImageData";
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
            <Col xs={24} sm={12} md={8}>
              <Card
                className="about-member-card"
                cover={
                  <img
                    alt="Muhaman Ijaz"
                    src={IMAGES.muhaman}
                    className="about-member-image"
                  />
                }
              >
                <Title level={4}>Muhaman Ijaz</Title>
                <Paragraph>Reg No: L1F21BSCS0850</Paragraph>
                <Tag color="cyan">Frontend Development</Tag>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Card
                className="about-member-card"
                cover={
                  <img
                    alt="Tayyab Ur Rehman"
                    src={IMAGES.tayyab}
                    className="about-member-image"
                  />
                }
              >
                <Title level={4}>Tayyab Ur Rehman</Title>
                <Paragraph><b>Reg No:</b> L1F21BSCS0369</Paragraph>
                <Tag color="cyan">Backend Development</Tag>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Card
                className="about-member-card"
                cover={
                  <img
                    alt="Abdullah Mujahid"
                    src={IMAGES.abdullah}
                    className="about-member-image"
                  />
                }
              >
                <Title level={4}>Abdullah Mujahid</Title>
                <Paragraph>Reg No: L1F21BSCS0178</Paragraph>
                <Tag color="cyan">Software Testing</Tag>
              </Card>
            </Col>
          </Row>

          <Divider />
          <Paragraph className="about-description">
            <strong>IntelliPath</strong> is an AI-driven personalized learning platform that adapts to
            the unique educational needs of each learner. It generates dynamic learning
            roadmaps based on individual goals, skills, and interests—ensuring a targeted and
            effective journey towards knowledge and career growth.
          </Paragraph>

          <Row gutter={[16, 16]} className="about-features-row">
            <Col xs={24} md={12}>
              <Card title="Personalized Learning Roadmaps" bordered={false} className="about-feature-card">
                <Paragraph>
                  Learners receive custom-tailored paths, selecting the right technologies and
                  resources based on their goals and background.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card title="GitHub Integration" bordered={false} className="about-feature-card">
                <Paragraph>
                  Track your real-world coding progress. IntelliPath awards points based on your GitHub contributions—helping you build a professional portfolio.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card title="AI-Powered Quizzes" bordered={false} className="about-feature-card">
                <Paragraph>
                  Practice smarter with AI-generated quizzes that adjust based on your strengths and weaknesses. Get instant feedback to improve continuously.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card title="Vocal Assistance" bordered={false} className="about-feature-card">
                <Paragraph>
                  IntelliPath makes learning accessible. Visually impaired users can hear on-screen content using text-to-speech technology.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card title="Tribes & Community" bordered={false} className="about-feature-card">
                <Paragraph>
                  Join or create tribes to collaborate, share resources, and grow together. AI moderation ensures a respectful environment by banning foul speech.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card title="Gamified Experience" bordered={false} className="about-feature-card">
                <Paragraph>
                  Compete on leaderboards, earn achievements, and stay motivated through a reward-based learning system.
                </Paragraph>
              </Card>
            </Col>

            <Col span={24}>
              <Card title="Smart Networking" bordered={false} className="about-feature-card">
                <Paragraph>
                  IntelliPath connects you with learners who share similar profiles and goals using AI-based Profile Similarity and Engagement Prediction.
                </Paragraph>
              </Card>
            </Col>
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
