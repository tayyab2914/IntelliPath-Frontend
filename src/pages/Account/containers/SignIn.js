import React, { useState } from "react";
import { Row, Col } from "antd";
import SignInForm from "../components/forms/SignInForm";
import ForgotPassword from "./ForgotPassword";
import { API_SIGN_IN } from "../../../apis/AuthApis";
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from "react-router";
import { IMAGES } from "../../../data/ImageData";

const SignIn = ({ toggleCurrentMode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ShowForgotPassword, setShowForgotPassword] = useState(false);
  const [ShowSpinner, setShowSpinner] = useState(false);

  const handleSignIn = async (email, password) => {
    const response = await API_SIGN_IN(email, password, dispatch, navigate, setShowSpinner);
    if (response) {
      const searchParams = new URLSearchParams(location.search);
      const next = searchParams.get('next');
      if (next) {
        navigate(next);
      } else {
        navigate('/');
      }
    }
  };

  return (
    <div>
      <Row gutter={24}>
        <Col xs={24} lg={12} className="form-container">
          {!ShowForgotPassword ? (
            <SignInForm
              handleSignIn={handleSignIn}
              handleForgotPassword={() => setShowForgotPassword(true)}
              handleSignUpToggle={() => toggleCurrentMode("signup")}
            />
          ) : (
            <ForgotPassword setShowForgotPassword={setShowForgotPassword} />
          )}
        </Col>
        <Col span={12} className="logo-container" data-aos="fade-up">
          <img src={IMAGES.authentication} alt="Account Logo" />
        </Col>
      </Row>
    </div>
  );
};

export default SignIn; 