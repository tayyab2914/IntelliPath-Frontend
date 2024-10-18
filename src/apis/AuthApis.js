import axios from "axios";
import { message } from "antd";

import { setAuthToken, setLoggedIn } from "../redux/AuthToken/Action";

import { DOMAIN_NAME } from "../utils/GlobalSettings";

export const API_SIGN_UP = async (
  email,
  password,
  verificationCode,
  codeToken,
  dispatch,
  setShowSpinner
) => {
  setShowSpinner(true);
  try {
    const response = await axios.post(`${DOMAIN_NAME}/auth/signup/`, {
      email: email,
      password: password,
      verification_code: verificationCode,
      code_token: codeToken,
    });

    // Assuming you want to set the token in redux store or local storage
    dispatch(setAuthToken(response.data.token));
    dispatch(setLoggedIn(true));

    console.log(response.data.token);
    message.success("User signed up successfully");
    return response.data;
  } catch (error) {
    message.error(error.response?.data?.message || "Signup failed");
  } finally {
    setShowSpinner(false);
  }
};

export const API_SIGN_IN = async (
  email,
  password,
  dispatch,
  navigate,
  setShowSpinner
) => {
  setShowSpinner(true);
  console.log('API_SIGN_IN',email,password)
  try {
    const response = await axios.post(`${DOMAIN_NAME}/auth/signin/`, {
      email: email,
      password: password,
    });

    // Handle login token
    dispatch(setAuthToken(response.data.token));
    dispatch(setLoggedIn(true));
    navigate('/');
    message.success("Signed in successfully");
    return response.data;
  } catch (error) {
    message.error(error.response?.data?.message || "Wrong credentials");
    return false
  } finally {
    setShowSpinner(false);
  }
};

export const API_SEND_VERIFICATION_EMAIL = async (
  email,
  forgotPassword = false,
  setShowSpinner,
) => {
  setShowSpinner(true);
  try {
    const response = await axios.post(
      `${DOMAIN_NAME}/auth/send_verification_email/`,
      {
        email: email,
        forgot_password: forgotPassword ? "true" : "false",
      }
    );

    message.success("Verification email sent");
    console.log(response.data.code_token);
    return response.data.code_token;
  } catch (error) {
    message.error(
      error.response?.data?.message || "Failed to send verification email"
    );
    return false
  } finally {
    setShowSpinner(false);
  }
};

export const API_AUTHENTICATE_CODE = async (
  verificationCode,
  codeToken,
  setShowSpinner
) => {
  setShowSpinner(true);
  try {
    const response = await axios.post(
      `${DOMAIN_NAME}/auth/authenticate_verification_code/`,
      {
        verification_code: verificationCode,
        code_token: codeToken,
      }
    );

    message.success("Verification code is correct");
    return response.data;
  } catch (error) {
    message.error(error.response?.data?.message || "Wrong verification code");
  } finally {
    setShowSpinner(false);
  }
};

export const API_SET_NEW_PASSWORD = async (
  email,
  newPassword,
  verificationCode,
  codeToken,
  setShowSpinner,
  setShowForgotPassword
) => {
  setShowSpinner(true);

  try {
    const response = await axios.post(`${DOMAIN_NAME}/auth/set_new_password/`, {
      email: email,
      new_password: newPassword,
      verification_code: verificationCode,
      code_token: codeToken,
    });

    message.success("Password reset successful");
    setShowForgotPassword(false)
    return response.data;
  } catch (error) {
    message.error(error.response?.data?.message || "Failed to reset password");
  } finally {
    setShowSpinner(false);
  }
};

export const API_GOOGLE_SIGN_IN = async (authCode,dispatch,navigate, setShowSpinner,redirect_uri) => {
  setShowSpinner(true);
  try {
    const response = await axios.get(`${DOMAIN_NAME}/auth/google_signin/`, {
      params: {
        code: authCode,
        redirect_uri:redirect_uri
      },
    });

    dispatch(setAuthToken(response.data.token));
    dispatch(setLoggedIn(true));
    navigate('/');
    message.success("Google sign-in successful");
    return response.data;
  } catch (error) {
    message.error("Google sign-in failed");
  } finally {
    setShowSpinner(false);
  }
};

export const API_TEST_TOKEN = async (token, setShowSpinner) => {
  setShowSpinner(true);
  try {
    const response = await axios.get(`${DOMAIN_NAME}/auth/test_token/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    message.success("Token is valid");
    return response.data;
  } catch (error) {
    message.error("Invalid or expired token");
  } finally {
    setShowSpinner(false);
  }
};
