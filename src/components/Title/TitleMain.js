import React from 'react'
import './styles/Title.css'
import { IMAGES } from '../../data/ImageData'
import { Divider } from 'antd'

const TitleMain = ({title,description}) => {
  return (
   <div className="generic-container">
     <div  className='title-main'>
      <img src={IMAGES.title} alt="" />
      <p className='title-title'>{title}</p>
      <p className='title-description'>{description}</p>
      <Divider/>
    </div>
   </div>
  )
}

export default TitleMain
