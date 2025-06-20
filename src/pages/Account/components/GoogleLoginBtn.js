import React, { useState, useEffect } from "react";
import GoogleButton from "react-google-button";
import { API_GOOGLE_SIGN_IN } from "../../../apis/AuthApis";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { GOOGLE_AUTH_CLIENT_ID, GOOGLE_AUTH_SCOPE, GOOGLE_AUTH_URL, REDIRECT_URI } from "../../../utils/GlobalSettings";
import CustomSpinner from "../../../components/Loader/CustomSpinner";

const GoogleLoginBtn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ShowSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      fetchEmail();
    }
  }, []);

  const onGoogleLoginSuccess = () => {
    const params = {
      response_type: "code",
      client_id: GOOGLE_AUTH_CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      prompt: "select_account",
      access_type: "offline",
      scope: GOOGLE_AUTH_SCOPE,
    };

    const urlParams = new URLSearchParams(params).toString();
    window.location = `${GOOGLE_AUTH_URL}?${urlParams}`;
  };

  const fetchEmail = async () => {
    const code = new URLSearchParams(window.location.search).get("code");
    API_GOOGLE_SIGN_IN(code, dispatch, navigate, setShowSpinner);
  };

  return (
    <>
      {ShowSpinner && <CustomSpinner fullscreen={true} />}
      <GoogleButton
        onClick={onGoogleLoginSuccess}
        label="Sign in with Google"
      />
    </>
  );
};

export default GoogleLoginBtn; 