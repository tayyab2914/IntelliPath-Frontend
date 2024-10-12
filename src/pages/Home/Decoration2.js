import React from "react";
import { Row, Col } from "antd";
import { IMAGES } from "../../components/Image/ImageData";
import "./styles/Decoration2.css";
import useWindowWidth from "../../hooks/useWindowWidth";

const Decoration2 = () => {
    const windowWidth = useWindowWidth()
  return (
    <div className="generic-container">
      <div className="home-dec-2"  data-aos="fade-up">
        <Row gutter={[0, 20]} align={"middle"} justify={"center"} className="home-dec-2" >
          <Col xs={20} md={12} lg={10}>
            <div className="home-dec-2-text-span " >
              <p className="home-dec-2-heading">
                <span className="two-tone-white">Harnessing AI for Your </span>
                <span className="two-tone-accent">Learning Journey </span>
              </p>

              <p className="home-dec-2-description">
                IntelliPath utilizes AI to customize your learning experience, offering tailored course suggestions and instant feedback to help you achieve your goals efficiently.
              </p>
            </div>
          </Col>
          <Col xs={20} md={12} lg={14} xl={12} style={{ textAlign: "center" }}>
            <img src={IMAGES.decoration2} className="home-dec-2-img" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Decoration2;
