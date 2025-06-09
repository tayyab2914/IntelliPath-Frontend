import React from "react";
import { Row, Col } from "antd";
import "./styles/LandingPage.css";
import MyButton from "../../components/Button/Button";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useNavigate } from "react-router-dom";

const LandingPage = ({imageSrc,whiteText,accentText,description,btnText,onClick}) => {
    const navigate = useNavigate()
    const windowWidth = useWindowWidth()
  return (
    <div className="generic-container">
        <div className="landing-page" data-aos="fade-right">
            <Row align={"middle"} justify={"space-evenly"} >
                {( windowWidth <= 768 ) && 
                    <Col xs={24} md={12}  xl={8} style={{ textAlign: "center" }}>
                        <img src={imageSrc} className="landing-page-img" />
                    </Col>
                }
                <Col xs={24} md={12} lg={12}>
                    <div className="landing-page-text-span" >
                        <p className="landing-page-heading">
                            <span className="two-tone-white">{whiteText}</span>
                            <span className="two-tone-accent"> {accentText} </span>
                        </p>
                        <p className="landing-page-description"> {description} </p>
                        <MyButton w={`${windowWidth < 576 ? '100%':"230px"}`} text={btnText} onClick={onClick} m="20px 0px 0px 0px"/>
                    </div>
                </Col>
                { windowWidth > 768 &&
                    <Col xs={24} md={12}  xl={8} style={{ textAlign: "center" }}>
                        <img src={imageSrc} className="landing-page-img" />
                    </Col>
                }
            </Row>
        </div>
    </div>
  )
}

export default LandingPage
