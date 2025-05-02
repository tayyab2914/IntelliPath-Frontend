import React, { useEffect, useState } from "react";
import { Row, Col, Spin } from "antd";
import { API_SEND_VERIFICATION_EMAIL, API_SIGN_UP } from "../../apis/AuthApis";
import SignUpForm from "./SignUpForm";
import AuthenticateVerification from "./AuthenticateVerification";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import { setLoggedIn } from "../../redux/AuthToken/Action";
import { IMAGES } from "../../data/ImageData";

const SignUp = ({ toggleCurrentMode }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [VerificationCode, setVerificationCode] = useState("");
  const [CodeToken, setCodeToken] = useState("");
  const [showVerificationComponent, setShowVerificationComponent] =
    useState(false);
  const [ShowSpinner, setShowSpinner] = useState(false);
  const { token, isLoggedIn } = useSelector((state) => state.authToken);


  const handleSignUp = async (email, password, name) => {
    setEmail(email);
    setPassword(password);
    setName(name);
    const response = await API_SEND_VERIFICATION_EMAIL( email, null, setShowSpinner );
    setShowVerificationComponent(response ? true : false);
    setCodeToken(response);
  };

  const handleVerification = async (code) => {
    setVerificationCode(code);
    const response = await API_SIGN_UP( Email, Password, Name, code, CodeToken, dispatch, setShowSpinner);
    if (response) {
      const searchParams = new URLSearchParams(location.search);
      const next = searchParams.get("next");
      if (next) {
        navigate(next);
      } else {
        navigate("/");
      }
    }
  };

  const handleSignInToggle = () => {
    toggleCurrentMode("signin");
  };

  return (
    <div>
      {ShowSpinner && <Spin fullscreen />}
      <Row gutter={24}>
        <Col xs={24} md={12} className="form-container" data-aos="fade-up">
          {!showVerificationComponent ? (
            <SignUpForm handleSignUp={handleSignUp} handleSignInToggle={handleSignInToggle} />
          ) : (
            <AuthenticateVerification handleVerification={handleVerification} />
          )}
        </Col>
        <Col span={12} className="logo-container" data-aos="fade-up">
          <img src={IMAGES.authentication} alt="Account Logo" />
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
