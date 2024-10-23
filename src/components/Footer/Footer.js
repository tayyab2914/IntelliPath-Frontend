import React from "react";
import { Row, Col, Typography, Divider } from "antd";
import { useNavigate } from "react-router";
import { IMAGES } from "../../data/ImageData";
import "./styles/Footer.css";

const { Text, Link, Title } = Typography;

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => () => {
    document.getElementById(path)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <div className="generic-container" >
    <div className="footer-main">

    <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} lg={6}>
            <Row justify="center" align="middle" style={{ height: '100%', textAlign: 'center' }}>
                <Col>
                    <div>
                        <img src={IMAGES.logo} alt="Footer Logo" className="footer-logo" style={{ display: 'block', margin: '0 auto' }} />
                    </div>
                    <Divider/>
                    <p className="footer-headline">Intellipath.online@gmail.com</p>
                    <p className="footer-headline">+92 322 4922848</p>
                    <Divider/>
                </Col>
            </Row>
        </Col>

        <Col xs={24} lg={6}>
            <div className="single_footer single_footer_address">
                <Title level={4}>Pages</Title>
                <ul className="footer-list">
                    <li><Link onClick={() => navigate("/")}>Home</Link></li>
                    <li><Link onClick={() => navigate("/about")}>About</Link></li>
                    <li><Link onClick={() => navigate("/dashboard")}>Dashboard</Link></li>
                    <li><Link onClick={() => navigate("/features")}>Features</Link></li>
                    <li><Link onClick={() => navigate("/documentation")}>Documentation</Link></li>
                    <li><Link onClick={() => navigate("/settings")}>Settings</Link></li>
                </ul>
            </div>
        </Col>

        <Col xs={24} lg={6}>
            <div className="single_footer single_footer_address">
                <Title level={4}>Features</Title>
                <ul className="footer-list">
                    <li><Link onClick={() => navigate("/roadmap")}>AI Pathways</Link></li>
                    <li><Link onClick={() => navigate("/quiz")}>Quizzes</Link></li>
                    <li><Link onClick={() => navigate("/github-integration")}>Github Contribution</Link></li>
                    <li><Link onClick={() => navigate("/settings")}>Blind Mode</Link></li>
                    <li><Link onClick={() => navigate("/vocal-assistance")}>Vocal Assistance</Link></li>
                    <li><Link onClick={() => navigate("/courses")}>Courses</Link></li>
                </ul>
            </div>
        </Col>

        <Col xs={24} lg={6}>
            <div className="single_footer single_footer_address">
                <ul className="footer-list">
                    <li><Link onClick={() => navigate("/leaderboard")}>Leaderboard</Link></li>
                    <li><Link onClick={() => navigate("/tribes")}>Tribes</Link></li>
                    <li><Link onClick={() => navigate("/vocal-assistance")}>Content Generator</Link></li>
                </ul>
            </div>
        </Col>
        </Row>

        <Row justify="center" className="mt-4">
            <Col span={24}>
                <p className="copyright">
                Copyright © 2024 <Link href="#">Intellipath</Link>.
                </p>
            </Col>
        </Row>

      </div>
    </div>
  );
};

export default Footer;
