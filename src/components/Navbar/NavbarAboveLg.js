import React, { useState } from 'react';
import './styles/Navbar.css';
import { Flex, Popover, Drawer, Divider } from 'antd';
import MyImage from '../Image/Image';
import MyIcon from '../Icon/MyIcon';
import { useNavigate } from 'react-router-dom'; 
import { NAV_DROPDOWN_ITEMS_LG, NAV_ITEMS_LG } from './NavbarData';
import LogoutBtn from './LogoutBtn';

const NavbarAboveLg = ({ version = 'light' }) => {
  const navigate = useNavigate();
  const [popoverVisible, setPopoverVisible] = useState(false); 

  const optionClickHandler = (path) => {
    navigate(path);
    setPopoverVisible(false);
  };

  const renderNavItems = () => {
    return NAV_ITEMS_LG.map(({ name, path }) => ( <span  key={name}  className={version === 'light' ? 'nav-item-light' : 'nav-item-dark'}   onClick={() => navigate(path)} > {name} </span> ));
  };

  const renderDropdownItems = () => {
    return (
      <>
        {NAV_DROPDOWN_ITEMS_LG.map(({ name, path, icon }) => (
          <React.Fragment key={name}> <p  onClick={() => optionClickHandler(path)}  className='navbar-popover-item' > <MyIcon type={icon} /> {name} </p> <Divider /> </React.Fragment>
        ))}
        <LogoutBtn /> 
      </>
    );
  };
  
  const handlePopoverClick = () => {
    setPopoverVisible(!popoverVisible); 
  };

  return (
    <div>
      <Flex gap="middle" align="center">
        <Flex className={version === 'light' ? 'nav-main-light' : 'nav-main-dark'} justify={'space-between'} align={'center'}>
          <MyImage type={'logo'} height={'55px'} onClick={()=>navigate('/')}/>
          <span>{renderNavItems()}</span>
          <Popover placement="bottomRight" content={<div>{renderDropdownItems()}</div>} trigger="click" visible={popoverVisible} onVisibleChange={setPopoverVisible}>
            <MyIcon type={'avatar'} size='lg' onClick={handlePopoverClick} className='navbar-avatar'/> 
          </Popover>
        </Flex>
      </Flex>

    </div>
  );
};

export default NavbarAboveLg;
