import React, { useEffect, useState } from "react";
import "./styles/Account.css";
import Signin from "./Signin";
import Signup from "./Signup";
import { Col, message, notification, Row } from "antd";
import { useSelector,useDispatch} from 'react-redux';
import { useNavigate,useLocation } from "react-router";
import NavbarMain from "../../components/Navbar/NavbarMain";
import Footer from "../../components/Footer/Footer";

const Account = () => {
  const [currentMode, setCurrentMode] = useState("signin");
  const { token, isLoggedIn } = useSelector((state) => state.authToken);
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }

    // notification.info({
    //   message: <b>Privacy Notice</b>,
    //   description: 'Rest easy, your identity remains completely anonymous—your privacy is our priority! 😊',
    //   placement: 'topRight',
    // });
  }, []);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  const toggleCurrentMode = (mode) => {
    setCurrentMode(mode);
  };

  return (
    <div className="generic-container">
      <NavbarMain />
      <Row gutter={24} align="middle" justify="center">
        <Col className="gutter-row account-main-row" span={24}>
          {currentMode === "signin" && ( <Signin toggleCurrentMode={toggleCurrentMode} /> )}
          {currentMode === "signup" && ( <Signup toggleCurrentMode={toggleCurrentMode} /> )}
        </Col>
      </Row>
      <Footer/>
    </div>
  );
};

export default Account;
