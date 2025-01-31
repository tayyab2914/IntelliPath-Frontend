// Signin Component
import React, { useState } from "react";
import { Row, Col } from "antd";
import SigninForm from "./SigninForm";
import ForgotPassword from "./ForgotPassword";
import { API_SIGN_IN } from "../../apis/AuthApis";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate,useLocation } from "react-router";
import { IMAGES } from "../../data/ImageData";

const Signin = ({ toggleCurrentMode }) => {
    const location = useLocation();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [ShowForgotPassword, setShowForgotPassword] = useState(false);
    const [ShowSpinner, setShowSpinner] = useState(false);
    const { token, blind_mode, isLoggedIn, rerender_app } = useSelector((state) => state.authToken);
  

  console.log('Signin',isLoggedIn)
  const handleSignIn = async (email, password) => {
    const response = await API_SIGN_IN(email, password,dispatch,navigate,setShowSpinner);
    if(response){
        const searchParams = new URLSearchParams(location.search);
        const next = searchParams.get('next'); 
        if (next)
        {
                navigate(next)
        }
            else {
            navigate('/');
        }
    }
  };

  return (
    <div data-aos="fade-up">
      <Row gutter={24}>
        <Col xs={24} lg={12} className="form-container" data-aos="fade-right">
          {!ShowForgotPassword ? (
            <SigninForm
              handleSignIn={handleSignIn}
              handleForgotPassword={() => setShowForgotPassword("true")}
              handleSignUpToggle={() => toggleCurrentMode("signup")}
            />
          ) : (
            <ForgotPassword setShowForgotPassword={setShowForgotPassword}/>
          )}
        </Col>
        <Col span={12} className="logo-container" data-aos="fade-left">
          <img src={IMAGES.authentication} alt="Account Logo" />
        </Col>
      </Row>
    </div>
  );
};

export default Signin;
