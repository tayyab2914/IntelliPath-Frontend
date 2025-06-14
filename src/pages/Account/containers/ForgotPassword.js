import React, { useState } from "react";
import { API_SEND_VERIFICATION_EMAIL, API_SET_NEW_PASSWORD } from "../../../apis/AuthApis";
import ForgotPasswordForm from "../components/forms/ForgotPasswordForm";
import VerificationForm from "../components/forms/VerificationForm";
import NewPasswordForm from "../components/forms/NewPasswordForm";
import { authStates } from "../data/authData";
import CustomSpinner from "../../../components/Loader/CustomSpinner";

const ForgotPassword = ({ setShowForgotPassword }) => {
  const [CurrentState, setCurrentState] = useState(authStates.EMAIL_INPUT);
  const [Email, setEmail] = useState("");
  const [CodeToken, setCodeToken] = useState("");
  const [ShowSpinner, setShowSpinner] = useState(false);
  const [verificationCode, setverificationCode] = useState('');

  const onSubmitEmail = async (email) => {
    setEmail(email);
    const response = await API_SEND_VERIFICATION_EMAIL(email, true, setShowSpinner,);
    if (response) {
      setCodeToken(response);
      setCurrentState(authStates.VERIFICATION_CODE);
    }
  };

  const handleVerification = async (code) => {
    setverificationCode(code);
    setCurrentState(authStates.NEW_PASSWORD);
  };

  const onNewPasswordSubmit = async (password) => {
    const response = await API_SET_NEW_PASSWORD(Email, password, verificationCode, CodeToken, setShowSpinner,setShowForgotPassword);
    if (response) {
      setShowForgotPassword(false);
    }
  };

  return (
    <>
      {ShowSpinner && <CustomSpinner fullscreen={true} />}
      {CurrentState === authStates.EMAIL_INPUT && (
        <ForgotPasswordForm onSubmitEmail={onSubmitEmail} />
      )}
      {CurrentState === authStates.VERIFICATION_CODE && (
        <VerificationForm handleVerification={handleVerification} />
      )}
      {CurrentState === authStates.NEW_PASSWORD && (
        <NewPasswordForm onNewPasswordSubmit={onNewPasswordSubmit} />
      )}
    </>
  );
};

export default ForgotPassword; 