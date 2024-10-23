import React from 'react';
import { BADGES } from './BadgeData';
import './styles/Badge.css'

const MyBadge = ({ type, size = 'sm',onClick,className,style }) => {
 

  const Selectedbadge = BADGES[type];

  const sizeClasses = {
    sm: 'badge-sm',
    md: 'badge-md',
    lg: 'badge-lg',
    xl: 'badge-xl',
    xxl: 'badge-xxl',
  };

  const sizeClass = sizeClasses[size] || sizeClasses.md; 

  return Selectedbadge ? <img src={Selectedbadge} alt={`${type} badge`} className={`${sizeClass} ${className}`} onClick={onClick} style={style}/>  : null;
};

export default MyBadge;
