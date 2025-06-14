import React, { useEffect, useState } from "react";
import "./styles/Navbar.css";
import NavbarAboveLg from "./NavbarAboveLg";
import useWindowWidth from "../../hooks/useWindowWidth";
import NavbarBelowLg from "./NavbarBelowLg";
import { Divider } from "antd";
import { API_GET_USER_ATTRIBUTE } from "../../apis/CoreApis";
import { useDispatch, useSelector } from "react-redux";
import { API_TEST_TOKEN } from "../../apis/AuthApis";
import { useNavigate } from "react-router-dom";
import { setUserAttributes } from "../../redux/AuthToken/Action";

const NavbarMain = ({ version = "light" }) => {
  const windowWidth = useWindowWidth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, rerender_app, isLoggedIn } = useSelector(
    (state) => state.authToken
  );

  const testToken = async () => {
    if (isLoggedIn) {
      API_TEST_TOKEN(token, dispatch, navigate);
    }
  };
  const fetchSettings = async () => {
    const response = await API_GET_USER_ATTRIBUTE(token);
    dispatch(setUserAttributes(response));
  };

  useEffect(() => {
    fetchSettings();
    testToken();
  }, [rerender_app]);

  return (
    <div className={`${version == "dark" && "bg-deep-dark"}`}>
      <div className="generic-container">
        {windowWidth > 992 && <NavbarAboveLg version={version} />}
        {windowWidth <= 992 && <NavbarBelowLg version={version} />}
      </div>
      <div className="navbar-divider">
        <Divider style={{ margin: "0px !important" }} />
      </div>
    </div>
  );
};

export default NavbarMain;
