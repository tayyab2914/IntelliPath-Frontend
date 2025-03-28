import { Popconfirm } from "antd";
import React from "react";
import MyIcon from "../Icon/MyIcon";
import "./styles/Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken, setLoggedIn, setRerenderApp } from "../../redux/AuthToken/Action";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { rerender_app } = useSelector((state) => state.authToken);
  return (
    <Popconfirm
      placement="rightBottom"
      title="Logout"
      description="Are you sure you want to logout?"
      okText="Yes"
      cancelText="No"
      onConfirm={() => {
        dispatch(setLoggedIn(false));
        dispatch(setAuthToken(null));
        dispatch(setRerenderApp(!rerender_app));
        navigate("/");
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <MyIcon type={"logout"} size="sm" /> <span>Logout</span>
      </div>
    </Popconfirm>
  );
};

export default LogoutBtn;
