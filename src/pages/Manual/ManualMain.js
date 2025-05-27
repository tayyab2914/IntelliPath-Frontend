import NavbarMain from "../../components/Navbar/NavbarMain";
import React, { useEffect, useState } from "react";
import { Collapse, Card, Typography, Row, Col, List } from "antd";
import { MANUAL_FEATURES } from "../../data/ManualData";
import TitleMain from "../../components/Title/TitleMain";
import "./styles/Manual.css";

const { Panel } = Collapse;

const ManualMain = () => {
  const [selectedFeature, setSelectedFeature] = useState(MANUAL_FEATURES[0]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      <NavbarMain />
      <div className="generic-container">
        <TitleMain
          title="Intellipath User Manual"
          description="Navigate your educational journey with clear milestones and tailored resources."
        />
      </div>
      <div className="manual-row-wrapper">
        <Row className="manual-row">
          <Col xs={24} md={6} style={{ padding: "5px" }}>
            <Card bordered={false} className="manual-title-list">
              <List
                itemLayout="horizontal"
                dataSource={MANUAL_FEATURES}
                renderItem={(feature) => (
                  <List.Item 
                    className={`manual-title-item ${ selectedFeature.title === feature.title ? "active" : "" }`}
                    onClick={() => setSelectedFeature(feature)}
                    style={{ cursor: "pointer", padding: "10px" }}
                  >
                    <List.Item.Meta avatar={feature.icon} title={ <Typography.Text strong> {feature.title} </Typography.Text> } />
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          {/* Right: Selected content */}
          <Col xs={24} md={18} style={{ padding: "5px" }}>
            <Card bordered={false} className="manual-detail-card">
              <Typography.Title level={4}>
                {selectedFeature.icon} &nbsp; {selectedFeature.title}
              </Typography.Title>
              <Typography.Paragraph>
                {selectedFeature.description}
              </Typography.Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ManualMain;
