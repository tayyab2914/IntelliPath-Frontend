
import React from "react";
import { Row, Col } from "antd";
import "../styles/Tribes.css";
import MyButton from "../../../components/Button/Button";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../../data/ImageData";

const TribesLandingPage = ({}) => {
    const navigate = useNavigate()
    const windowWidth = useWindowWidth()
  return (
    <div className="generic-container">
        <div className="tribes-landing" data-aos="fade-right">
            <Row align={"middle"} justify={"space-evenly"} >
                {( windowWidth <= 768 ) && 
                    <Col xs={24} md={12}  xl={8} style={{ textAlign: "center" }}>
                        <img src={IMAGES.tribesWbg} className="tribes-landing-img" />
                    </Col>
                }
                <Col xs={24} md={12} lg={12}>
                    <div className="tribes-landing-text-span" >
                        <p className="tribes-landing-heading">
                            <span className="two-tone-white">Connect with</span>
                            <span className="two-tone-accent"> Tribes </span>
                        </p>
                        <p className="tribes-landing-description"> A dynamic space where learners come together to discuss, collaborate, and share ideas, fostering a vibrant community. </p>
                        <MyButton w={`${windowWidth < 576 ? '100%':"230px"}`} text={'Explore Tribes'} onClick={()=>navigate('/tribes/explore')}  m="20px 0px 0px 0px"/>
                    </div>
                </Col>
                { windowWidth > 768 &&
                    <Col xs={24} md={12}  xl={8} style={{ textAlign: "center" }}>
                        <img src={IMAGES.tribesWbg} className="tribes-landing-img" />
                    </Col>
                }
            </Row>
        </div>
    </div>
  )
}

export default TribesLandingPage
