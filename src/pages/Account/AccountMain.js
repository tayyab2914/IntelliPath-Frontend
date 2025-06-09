import React, { useEffect, useState } from "react";
import "./styles/Account.css";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import { Col, Row } from "antd";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router";
import NavbarMain from "../../components/Navbar/NavbarMain";
import Footer from "../../components/Footer/Footer";

const Account = () => {
  const [currentMode, setCurrentMode] = useState("signin");
  const { isLoggedIn } = useSelector((state) => state.authToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  const toggleCurrentMode = (mode) => {
    setCurrentMode(mode);
  };

  return (
    <div className="generic-container">
      <NavbarMain />
      <Row gutter={24} align="middle" justify="center">
        <Col className="gutter-row account-main-row" span={24}>
          {currentMode === "signin" && (
            <SignIn toggleCurrentMode={toggleCurrentMode} />
          )}
          {currentMode === "signup" && (
            <SignUp toggleCurrentMode={toggleCurrentMode} />
          )}
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Account;
