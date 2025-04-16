import NavbarMain from "../../components/Navbar/NavbarMain";
import React, { useEffect } from "react";
import { Collapse, Card, Typography } from "antd";
import {
  UsergroupAddOutlined,
  TeamOutlined,
  SafetyOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { MANUAL_FEATURES } from "../../data/ManualData";
import TitleMain from "../../components/Title/TitleMain";
import './styles/Manual.css'

const { Panel } = Collapse;

const ManualMain = () => {
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
      <Card
        style={{ maxWidth: 900, margin: "auto" }}
        bordered={false}
      >
    
        {MANUAL_FEATURES.map((feature, idx) => (
          <Collapse accordion className="manual-collapse" expandIconPosition="end">
            <Panel
              header={
                <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {feature.icon} &nbsp; {feature.title}
                </span>
              }
              key={idx}
            >
              {feature.description}
            </Panel>
          </Collapse>
        ))}

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Typography.Text type="secondary">
            🛠 No configuration required — the system adapts to your usage
            automatically.
          </Typography.Text>
        </div>
      </Card>
    </>
  );
};

export default ManualMain;
