import React from "react";
import { Row, Col, Typography, Divider } from "antd";
import { useNavigate } from "react-router";
import { IMAGES } from "../../data/ImageData";
import "./styles/Footer.css";
import useSpeech from "../../utils/WebSpeech.js/functionalities/useSpeech";

const { Text, Link, Title } = Typography;

const Footer = () => {
  const navigate = useNavigate();
  const { speakWord } = useSpeech();

  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Features", path: "/features" },
    { name: "Documentation", path: "/documentation" },
    { name: "Settings", path: "/settings" },
  ];

  const features = [
    { name: "AI Pathways", path: "/roadmap" },
    { name: "Quizzes", path: "/quiz" },
    { name: "Github Contribution", path: "/github-integration" },
    { name: "Blind Mode", path: "/settings" },
    { name: "Vocal Assistance", path: "/vocal-assistance" },
    { name: "Courses", path: "/courses" },
  ];

  const extras = [
    { name: "Leaderboard", path: "/leaderboard" },
    { name: "Tribes", path: "/tribes" },
    { name: "Content Generator", path: "/vocal-assistance" },
  ];

  const renderLinks = (links) =>
    links.map(({ name, path }) => (
      <li key={name}>
        <Link
          onClick={() => navigate(path)}
          onMouseEnter={() => speakWord(name)}
        >
          {name}
        </Link>
      </li>
    ));
const EMAIL = "intellipathai@gmail.com"
const CONTACT = '+92 322 4922848'
  return (
    <div className="generic-container">
      <div className="footer-main">
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={24} lg={6}>
            <Row
              justify="center"
              align="middle"
              style={{ height: "100%", textAlign: "center" }}
            >
              <Col>
                <div>
                  <img src={IMAGES.logo} alt="Footer Logo" className="footer-logo" style={{ display: "block", margin: "0 auto" }}/>
                </div>
                <Divider />
                <p className="footer-headline" onMouseEnter={() => speakWord(EMAIL)}>{EMAIL}</p>
                <p className="footer-headline" onMouseEnter={() => speakWord(CONTACT)}>{CONTACT}</p>
                <Divider />
              </Col>
            </Row>
          </Col>

          <Col xs={24} lg={6}>
            <div className="single_footer single_footer_address">
              <Title level={4}>Pages</Title>
              <ul className="footer-list">{renderLinks(pages)}</ul>
            </div>
          </Col>

          <Col xs={24} lg={6}>
            <div className="single_footer single_footer_address">
              <Title level={4}>Features</Title>
              <ul className="footer-list">{renderLinks(features)}</ul>
            </div>
          </Col>

          <Col xs={24} lg={6}>
            <div className="single_footer single_footer_address">
              <ul className="footer-list">
                {extras.map(({ name, path }) => (
                  <li key={name}>
                    <Link onClick={() => navigate(path)}>{name}</Link>
                  </li>
                ))}
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
