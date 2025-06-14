import React from 'react'
import './styles/Title.css'
import { IMAGES } from '../../data/ImageData'
import { Divider } from 'antd'
import useSpeech from '../../utils/WebSpeech.js/functionalities/useSpeech'

const TitleMain = ({title,description}) => {
  const { speakWord } = useSpeech();
  return (
   <div className="generic-container flex-container">
     <div  className='title-main'>
      <img src={IMAGES.title} alt="" />
      <p className='title-title' onMouseEnter={()=>speakWord(title)}>{title}</p>
      <p className='title-description' onMouseEnter={()=>speakWord(description)}>{description}</p>
      <Divider/>
    </div>
   </div>
  )
}

export default TitleMain
