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
import useSpeech from '../../utils/WebSpeech.js/functionalities/useSpeech';
import { ICONS } from '../../data/IconData';


const NavbarBelowLg = ({version,UserInfo}) => {
    const navigate = useNavigate();
    const {speakWord} = useSpeech()
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
                <div className='navbar-profile-info' onClick={()=>navigate('/profile')}>
                            <img src={ICONS.avatar} alt="" />
                            {/* <img src={UserInfo?.profile_picture? `${DOMAIN_NAME}${UserInfo?.profile_picture}`: ICONS.user} alt="" /> */}
                            <span>
                                <p className='navbar-first-name'>{UserInfo?.first_name}</p>
                                <p className='navbar-email'>{UserInfo?.email}</p>
                            </span>
                        </div>
                        <Divider/>
                {NAV_ITEMS_BELOW_LG.map(({ name, path,icon }) => (
                    <div key={name}  onMouseEnter={()=>speakWord(name)}> <p   onClick={() => optionClickHandler(path)}  className='navbar-drawer-item'> <MyIcon type={icon}/>  {name}  </p></div>
                ))}
        {isLoggedIn &&  <div className='navbar-drawer-item' onMouseEnter={()=>speakWord('logout')}><LogoutBtn  /> </div> }
            </span>
        </Drawer>
    </>
  )
}

export default NavbarBelowLg
