import React, { useEffect, useState } from 'react';
import './styles/Navbar.css';
import { Flex, Popover, Drawer, Divider } from 'antd';
import MyImage from '../Image/Image';
import MyIcon from '../Icon/MyIcon';
import { useNavigate } from 'react-router-dom'; 
import { NAV_DROPDOWN_ITEMS_LG, NAV_ITEMS_LG } from '../../data/NavbarData';
import LogoutBtn from './LogoutBtn';
import { useSelector } from 'react-redux';
import useSpeech from '../../utils/WebSpeech.js/functionalities/useSpeech';
import { IMAGES } from '../../data/ImageData';
import { ICONS } from '../../data/IconData';
import {  MEDIA_URL } from '../../utils/GlobalSettings';

const NavbarAboveLg = ({ version = 'light' }) => {
  const navigate = useNavigate();
  const { speakWord } = useSpeech();
  const [popoverVisible, setPopoverVisible] = useState(false); 
  const { token, isLoggedIn,user_attributes } = useSelector((state) => state.authToken);

  const optionClickHandler = (path) => {
    navigate(path);
    setPopoverVisible(false);
  };

  const renderNavItems = () => {
    return NAV_ITEMS_LG.map(({ name, path }) => ( <span  key={name}  className={version === 'light' ? 'nav-item-light' : 'nav-item-dark'}   onClick={() => navigate(path)} onMouseEnter={()=>speakWord(name)}> {name} </span> ));
  };

  useEffect(()=>{
  },[user_attributes])
  const renderDropdownItems = () => {
    
    return (
      <div >
        <div className='navbar-profile-info' onClick={()=>navigate('/profile')}>
            <img src={user_attributes?.profile_picture? `${MEDIA_URL}${user_attributes?.profile_picture}`: ICONS.avatar} onError={(e) => { e.target.onerror = null; e.target.src = ICONS?.avatar }}/>
            
            <span>
                <p className='navbar-first-name'>{user_attributes?.first_name}</p>
                <p className='navbar-email'>{user_attributes?.email}</p>
            </span>
        </div>
        <Divider/>
        {NAV_DROPDOWN_ITEMS_LG.map(({ name, path, icon,index  }) => (
          <React.Fragment key={name}> <p  onClick={() => optionClickHandler(path)}  className='navbar-popover-item' onMouseEnter={()=>speakWord(name)}> <MyIcon type={icon} /> {name} </p> </React.Fragment>
        ))}
        {isLoggedIn && <div className='navbar-popover-item' onMouseEnter={()=>speakWord("Logout")}><LogoutBtn  /> </div>}
      </div>
    );
  };
  
  const handlePopoverClick = () => {
    setPopoverVisible(!popoverVisible); 
  };

  return (
    <div>
      <Flex gap="middle" align="center">
        <Flex className={version === 'light' ? 'nav-main-light' : 'nav-main-dark'} justify={'space-between'} align={'center'}>
          <MyImage type={'logo'} h={'55px'} w={'55px'} onClick={()=>navigate('/')} className={'navbar-logo'}/>
          <span>{renderNavItems()}</span>
          <Popover placement="bottomRight" content={<div>{renderDropdownItems()}</div>} trigger="click" visible={popoverVisible} onVisibleChange={setPopoverVisible}>
          <img src={user_attributes?.profile_picture? `${MEDIA_URL}${user_attributes?.profile_picture}`: ICONS.avatar} onClick={handlePopoverClick} className='navbar-avatar' onError={(e) => { e.target.onerror = null; e.target.src = ICONS?.avatar }} />
            {/* <MyIcon type={'avatar'} size='lg' onClick={handlePopoverClick} className='navbar-avatar'/>  */}
          </Popover>
        </Flex>
      </Flex>

    </div>
  );
};

export default NavbarAboveLg;
