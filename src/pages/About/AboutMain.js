import React, { useEffect } from "react";
import { Typography, Row, Col, Card, Divider } from "antd";
import NavbarMain from "../../components/Navbar/NavbarMain";

const { Title, Paragraph, Text } = Typography;

const AboutMain = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <NavbarMain />

      <div style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <Typography>
          <Title level={2} style={{ textAlign: "center" }}>
            About IntelliPath
          </Title>
          <Divider />

          <Paragraph>
            <strong>IntelliPath</strong> is an AI-driven personalized learning platform that adapts to
            the unique educational needs of each learner. It generates dynamic learning
            roadmaps based on individual goals, skills, and interests—ensuring a targeted and
            effective journey towards knowledge and career growth.
          </Paragraph>

          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card title="Personalized Learning Roadmaps" bordered={false}>
                <Paragraph>
                  Learners receive custom-tailored paths, selecting the right technologies and
                  resources based on their goals and background.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card title="GitHub Integration" bordered={false}>
                <Paragraph>
                  Track your real-world coding progress. IntelliPath awards points based on your GitHub contributions—helping you build a professional portfolio.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card title="AI-Powered Quizzes" bordered={false}>
                <Paragraph>
                  Practice smarter with AI-generated quizzes that adjust based on your strengths and weaknesses. Get instant feedback to improve continuously.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card title="Vocal Assistance" bordered={false}>
                <Paragraph>
                  IntelliPath makes learning accessible. Visually impaired users can hear on-screen content using text-to-speech technology.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card title="Tribes & Community" bordered={false}>
                <Paragraph>
                  Join or create tribes to collaborate, share resources, and grow together. AI moderation ensures a respectful environment by banning foul speech.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card title="Gamified Experience" bordered={false}>
                <Paragraph>
                  Compete on leaderboards, earn achievements, and stay motivated through a reward-based learning system.
                </Paragraph>
              </Card>
            </Col>

            <Col span={24}>
              <Card title="Smart Networking" bordered={false}>
                <Paragraph>
                  IntelliPath connects you with learners who share similar profiles and goals using AI-based Profile Similarity and Engagement Prediction.
                </Paragraph>
              </Card>
            </Col>
          </Row>

          <Divider />
          <Paragraph style={{ textAlign: "center", fontStyle: "italic" }}>
            IntelliPath is built by students of the University of Central Punjab as their BSCS Final Year Project, under the supervision of <Text strong>Mr. Muhammad Zulkifl Hasan</Text>.
          </Paragraph>
        </Typography>
      </div>
    </div>
  );
};

export default AboutMain;
