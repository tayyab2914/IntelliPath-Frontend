import React, { useEffect, useState } from 'react';
import './styles/Navbar.css';
import NavbarAboveLg from './NavbarAboveLg';
import useWindowWidth from '../../hooks/useWindowWidth';
import NavbarBelowLg from './NavbarBelowLg';
import { Divider } from 'antd';
import { API_GET_USER_ATTRIBUTE } from '../../apis/CoreApis';
import { useDispatch, useSelector } from 'react-redux';
import { API_TEST_TOKEN } from '../../apis/AuthApis';
import { useNavigate } from 'react-router-dom';

const NavbarMain = ({ version = 'light' }) => {
  const windowWidth = useWindowWidth();
    const [UserInfo, setUserInfo] = useState({});
      const dispatch = useDispatch();
      const navigate = useNavigate()
    const { token, blind_mode, isLoggedIn, rerender_app } = useSelector((state) => state.authToken);
  
    const testToken = async()=>{
      if(isLoggedIn)
      {
        API_TEST_TOKEN(token,dispatch,navigate)
      }
    }
    const fetchSettings = async () => {
      const response = await API_GET_USER_ATTRIBUTE(token);
      setUserInfo(response);
    };
  
    useEffect(()=>{
        fetchSettings()
        testToken()
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
