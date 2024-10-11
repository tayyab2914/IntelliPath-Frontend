import React from 'react';
import './styles/Navbar.css';
import NavbarAboveLg from './NavbarAboveLg';
import useWindowWidth from '../../hooks/useWindowWidth';
import NavbarBelowLg from './NavbarBelowLg';
import { Divider } from 'antd';

const NavbarMain = ({ version = 'light' }) => {
  const windowWidth = useWindowWidth();

  return (
    <div className={`${version == 'dark' && 'bg-deep-dark'} navbar`}>
        <div className='generic-container'>
            {windowWidth > 992 && <NavbarAboveLg version={version} />}
            {windowWidth <= 992 && <NavbarBelowLg version={version} />}
        </div>
        <div className='navbar-divider'>
        <Divider style={{margin:'0px !important'}} />
        </div>
    </div>
  );
};

export default NavbarMain;
