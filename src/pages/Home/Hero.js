import React from 'react'
import './styles/Hero.css'
import { IMAGES } from '../../data/ImageData'
import MyButton from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
    const navigate = useNavigate()
  return (
    <div className='generic-container'>
        <div className='hero-main '>
            <img src={IMAGES.newEraOfLearning} className='hero-new-era-img blink-1'/>
            <p className='hero-new-era-text tracking-in-expand'>PERSONALIZED LEARNING <br />FOR SUCCESS</p>
            <div className=' tracking-in-expand'><MyButton text={'Explore Features'}  variant='outlined' w='200px' onClick={()=>navigate('/features')}/></div>
            <img src={IMAGES.empoweringLearners} className='hero-empowering-img'/>
        </div>
    </div>
  )
}

export default Hero
