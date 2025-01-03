import { Popconfirm } from "antd";
import React from "react";
import MyIcon from "../Icon/MyIcon";
import './styles/Navbar.css'
import { useDispatch } from "react-redux";
import { setAuthToken, setLoggedIn } from "../../redux/AuthToken/Action";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  return (
    <Popconfirm
      placement="rightBottom"
      title="Logout"
      description="Are you sure you want to logout?"
      okText="Yes"
      cancelText="No"
        onConfirm={() => {
            dispatch(setLoggedIn(false))
            dispatch(setAuthToken(null))
            navigate('/')
        }}
    >
      <div style={{display:"flex",alignItems:"center"}}>
        <MyIcon type={"logout"} size="sm"/>{" "}
        <span >Logout</span>
      </div>
    </Popconfirm>
  );
};

export default LogoutBtn;
