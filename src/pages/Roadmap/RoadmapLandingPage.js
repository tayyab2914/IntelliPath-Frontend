import React from "react";
import { Row, Col } from "antd";
import "./styles/Roadmap.css";
import MyButton from "../../components/Button/Button";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../data/ImageData";

const RoadmapLandingPage = () => {
    const navigate = useNavigate()
    const windowWidth = useWindowWidth()
  return (
    <div className="generic-container">
        <div className="roadmap-landing" data-aos="fade-right">
            <Row align={"middle"} justify={"space-evenly"} >
                {( windowWidth <= 768 ) && 
                    <Col xs={24} md={12}  xl={8} style={{ textAlign: "center" }}>
                        <img src={IMAGES.roadmap2} className="roadmap-landing-img" />
                    </Col>
                }
                <Col xs={20} md={12} lg={12}>
                    <div className="roadmap-landing-text-span" >
                        <p className="roadmap-landing-heading">
                            <span className="two-tone-white">AI Generated</span>
                            <span className="two-tone-accent"> Pathways </span>
                        </p>
                        <p className="roadmap-landing-description"> Get personalized learning roadmaps tailored to your skills, goals, and pace. IntelliPath uses AI to dynamically adjust your curriculum, helping you achieve success with an efficient, customized learning path. </p>
                        <MyButton w={`${windowWidth < 576 ? '100%':"230px"}`} text={'Proceed To Onboarding'} onClick={()=>navigate('/onboarding')}/>
                    </div>
                </Col>
                { windowWidth > 768 &&
                    <Col xs={24} md={12}  xl={8} style={{ textAlign: "center" }}>
                        <img src={IMAGES.roadmap2} className="roadmap-landing-img" />
                    </Col>
                }
            </Row>
        </div>
    </div>
  )
}

export default RoadmapLandingPage
