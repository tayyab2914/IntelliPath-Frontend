import React from 'react';
import { BADGES } from './BadgeData';
import './styles/Badge.css'

const MyBadge = ({ type, size = 'sm',onClick,className,style }) => {
 

  const SelectedIcon = BADGES[type];

  const sizeClasses = {
    sm: 'icon-sm',
    md: 'icon-md',
    lg: 'icon-lg',
    xl: 'icon-xl',
    xxl: 'icon-xxl',
  };

  const sizeClass = sizeClasses[size] || sizeClasses.md; 

  return SelectedIcon ? <img src={SelectedIcon} alt={`${type} icon`} className={`${sizeClass} ${className}`} onClick={onClick} style={style}/>  : null;
};

export default MyBadge;
