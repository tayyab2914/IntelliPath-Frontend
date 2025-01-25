import React, { useEffect, useState } from 'react';
import './styles/Navbar.css';
import NavbarAboveLg from './NavbarAboveLg';
import useWindowWidth from '../../hooks/useWindowWidth';
import NavbarBelowLg from './NavbarBelowLg';
import { Divider } from 'antd';
import { API_GET_USER_ATTRIBUTE } from '../../apis/CoreApis';
import { useSelector } from 'react-redux';

const NavbarMain = ({ version = 'light' }) => {
  const windowWidth = useWindowWidth();
    const [UserInfo, setUserInfo] = useState({});
    const { token, blind_mode, isLoggedIn, rerender_app } = useSelector((state) => state.authToken);
  
    const fetchSettings = async () => {
      const response = await API_GET_USER_ATTRIBUTE(token);
      setUserInfo(response);
    };
  
    useEffect(()=>{
        fetchSettings()
    },[])

  return (
    <div className={`${version == 'dark' && 'bg-deep-dark'} navbar`}>
        <div className='generic-container'>
            {windowWidth > 992 && <NavbarAboveLg version={version} UserInfo={UserInfo}/>}
            {windowWidth <= 992 && <NavbarBelowLg version={version} UserInfo={UserInfo}/>}
        </div>
        <div className='navbar-divider'>
        <Divider style={{margin:'0px !important'}} />
        </div>
    </div>
  );
};

export default NavbarMain;
