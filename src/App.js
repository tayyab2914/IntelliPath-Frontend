import React, { useEffect } from "react";
import ProjectRoutes from "./utils/ProjectRoutes";
import "./App.css";
import "./animations.css";
import { Flex } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setUserAttributes } from "./redux/AuthToken/Action";
import { API_GET_USER_ATTRIBUTE } from "./apis/CoreApis";
import { API_TEST_TOKEN } from "./apis/AuthApis";
import { useNavigate } from "react-router-dom";

const App = () => {
  const { token, blind_mode, isLoggedIn, user_attributes,rerender_app } = useSelector( (state) => state.authToken );


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  useEffect(() => {
  }, [rerender_app]);

  return (
    <div className="app">
      <ProjectRoutes />
    </div>
  );
};

export default App;
