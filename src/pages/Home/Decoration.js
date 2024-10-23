import React from 'react'
import { IMAGES } from '../../data/ImageData'

const Decoration = () => {
  return (
    <div className='generic-container'  data-aos="fade-up">
        <img src={IMAGES.decoration1} style={{width:"100%"}}/>
    </div>
  )
}

export default Decoration
