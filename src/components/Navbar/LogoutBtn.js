import { Popconfirm } from "antd";
import React from "react";
import MyIcon from "../Icon/MyIcon";
import './styles/Navbar.css'

const LogoutBtn = () => {
  return (
    <Popconfirm
      placement="rightBottom"
      title="Logout"
      description="Are you sure you want to logout?"
      okText="Yes"
      cancelText="No"
      //   onConfirm={() => dispatch(setLoggedIn(false))}
    >
      <div className="navbar-drawer-item">
        <MyIcon type={"logout"} />{" "}
        <span >Logout</span>
      </div>
    </Popconfirm>
  );
};

export default LogoutBtn;
