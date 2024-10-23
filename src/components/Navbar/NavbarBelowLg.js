import React from 'react'
import { useState } from 'react';
import './styles/Navbar.css';
import { Divider, Flex } from 'antd';
import { useNavigate } from 'react-router-dom'; 
import MyImage from '../Image/Image';
import MyIcon from '../Icon/MyIcon';
import { Button, Drawer, Radio, Space } from 'antd';
import { NAV_ITEMS_BELOW_LG } from '../../data/NavbarData';
import LogoutBtn from './LogoutBtn';
import { useSelector } from 'react-redux';


const NavbarBelowLg = ({version,navItems}) => {
    const navigate = useNavigate();
    const [ShowDrawer, setShowDrawer] = useState(false);
    const { token, isLoggedIn } = useSelector((state) => state.authToken);
    const optionClickHandler = (path)=>{
        navigate(path)
        setShowDrawer(false)
    }
  return (
    <>
        <Flex gap="middle" align="center">
            <Flex className={version === 'light' ? 'nav-main-light' : 'nav-main-dark'} justify={'space-between'} align={'center'}>
                <MyImage type={'logo'} h={'55px'}  onClick={()=>navigate('/')}/>
                <MyIcon type={'bars'} size='lg' onClick={()=>setShowDrawer(true)}/>
            </Flex>
        </Flex>
        <Drawer title="Options" placement={'right'} onClose={()=>setShowDrawer(false)} open={ShowDrawer}>
            <span>
                {NAV_ITEMS_BELOW_LG.map(({ name, path,icon }) => (
                    <div key={name}> <p   onClick={() => optionClickHandler(path)}  className='navbar-drawer-item'> <MyIcon type={icon}/>  {name}  </p></div>
                ))}
        {isLoggedIn &&  <div className='navbar-drawer-item'><LogoutBtn  /> </div> }
            </span>
        </Drawer>
    </>
  )
}

export default NavbarBelowLg
