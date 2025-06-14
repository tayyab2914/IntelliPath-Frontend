import React, { useEffect } from 'react'
import NavbarMain from "../../components/Navbar/NavbarMain";
import { Col, Divider, Row } from "antd";
import { BADGES } from "../../components/Badge/BadgeData";
import TitleMain from "../../components/Title/TitleMain";
import './styles/Gamification.css'
import { GAMIFICATION_DATA } from '../../data/GamificationData';
const GamificationMain = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  return (
    <>
      <NavbarMain />
      <div className="generic-container">
        <div className="settings-main">
          <TitleMain title="Badge Showcase" description="Explore Your Achievements and Unlock New Rewards!" />
          {GAMIFICATION_DATA.map((item)=>
          <Row className="gamification-row">
            <Col xs={24} className="gamification-col">
                <p className="gamification-title">{item.title}</p>
                <p className="gamification-description">{item.main_description}</p>
                <Row className="gamification-badges-row" gutter={[15,15]} justify={'space-evenly'}>
                    {item.badges.map((badge) => (
                        <Col xs={6}  md={3} key={badge.badge_name} className="gamification-badge-col">
                            <img src={BADGES[badge.badge_name]} alt={badge.name} className="gamification-badge-image" />
                            <p className="gamification-badge-name">{badge.name}</p>
                            <p className="gamification-badge-description">{badge.description}</p>
                        </Col>
                    ))}
                </Row>
            </Col>
            <Divider/>
        </Row>

        )}
        </div>
      </div>
    </>
  );
};

export default GamificationMain;
