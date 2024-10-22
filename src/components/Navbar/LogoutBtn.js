import { Popconfirm } from "antd";
import React from "react";
import MyIcon from "../Icon/MyIcon";
import './styles/Navbar.css'
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../redux/AuthToken/Action";

const LogoutBtn = () => {
    const dispatch = useDispatch()
  return (
    <Popconfirm
      placement="rightBottom"
      title="Logout"
      description="Are you sure you want to logout?"
      okText="Yes"
      cancelText="No"
        onConfirm={() => dispatch(setLoggedIn(false))}
    >
      <div style={{display:"flex",alignItems:"center"}}>
        <MyIcon type={"logout"} size="sm"/>{" "}
        <span >Logout</span>
      </div>
    </Popconfirm>
  );
};

export default LogoutBtn;
