import React, { useState } from "react";
import { Row, Col } from "antd";
import "./styles/Features.css";
import MyButton from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import useWindowWidth from "../../hooks/useWindowWidth";

const Feature = ({data}) => {
    const {textWhite, textAccent, description, image, path, orientation} = data;
    const navigate = useNavigate();
    const windowWidth = useWindowWidth();
    const [imageLoading, setImageLoading] = useState(true);

    const handleImageLoad = () => {
        setImageLoading(false);
    };

    return (
        <div className="generic-container">
            <div className="feature" data-aos="fade-right">
                <Row align={"middle"} justify={"space-evenly"} className="feature">
                    {(orientation === 'left' || windowWidth <= 576) && 
                        <Col xs={20} sm={12} xl={8} style={{ textAlign: "center" }}>
                            {imageLoading && <div className="shimmer-container" />}
                            <img 
                                src={image} 
                                className="feature-img" 
                                onLoad={handleImageLoad}
                                style={{ display: imageLoading ? 'none' : 'block' }}
                                alt={`${textWhite} ${textAccent}`}
                            />
                        </Col>
                    }
                    <Col xs={20} sm={12} lg={12}>
                        <div className="feature-text-span">
                            <p className="feature-heading">
                                <span className="two-tone-white">{textWhite}</span>
                                <span className="two-tone-accent">{textAccent}</span>
                            </p>
                            <p className="feature-description">{description}</p>
                            <MyButton 
                                variant="outlined" 
                                w={`${windowWidth < 576 ? '100%' : "230px"}`} 
                                text={'Explore'} 
                                onClick={() => navigate(path)} 
                                className={"feature-navigation-btn"}
                            />
                        </div>
                    </Col>
                    {orientation === 'right' && windowWidth > 576 &&
                        <Col xs={20} sm={12} xl={8} style={{ textAlign: "center" }}>
                            {imageLoading && <div className="shimmer-container" />}
                            <img 
                                src={image} 
                                className="feature-img" 
                                onLoad={handleImageLoad}
                                style={{ display: imageLoading ? 'none' : 'block' }}
                                alt={`${textWhite} ${textAccent}`}
                            />
                        </Col>
                    }
                </Row>
            </div>
        </div>
    );
};

export default Feature;
