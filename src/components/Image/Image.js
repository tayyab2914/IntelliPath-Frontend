import React from 'react';
import { IMAGES } from './ImageData';
const MyImage = ({ type, altText, width = '100%', height = 'auto',onClick,className  }) => {
  return (
    <div>
      {IMAGES[type] ? (
        <img  src={IMAGES[type]}  alt={altText}  style={{ width: width, height: height }}  onClick={onClick} className={className}/>
      ) : (
        <p>Image not found</p>
      )}
    </div>
  );
};

export default MyImage;
