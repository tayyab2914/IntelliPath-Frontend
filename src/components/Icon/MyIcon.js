import React from 'react';
import { ICONS } from './IconData';
import './styles/icon.css'

const MyIcon = ({ type, size = 'sm',onClick,className }) => {
 

  const SelectedIcon = ICONS[type];

  const sizeClasses = {
    sm: 'icon-sm',
    md: 'icon-md',
    lg: 'icon-lg',
    xl: 'icon-xl',
    xxl: 'icon-xxl',
  };

  const sizeClass = sizeClasses[size] || sizeClasses.md; 

  return SelectedIcon ? <img src={SelectedIcon} alt={`${type} icon`} className={`${sizeClass} ${className}`} onClick={onClick}/>  : null;
};

export default MyIcon;
