import React, { useEffect } from 'react'
import NavbarMain from '../../components/Navbar/NavbarMain'
import { Col, Row } from 'antd';
import { IMAGES } from '../../data/ImageData';
import { useNavigate } from 'react-router-dom';
import LandingPage from '../../components/LandingPage/LandingPage';
import Footer from '../../components/Footer/Footer';
import useWindowWidth from '../../hooks/useWindowWidth';

const AssessmentLanding = () => {
    const windowWidth = useWindowWidth()
    const navigate = useNavigate()
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  return (
    <div>
        <NavbarMain/>
        
      <div className="generic-container">
      <LandingPage imageSrc={IMAGES.quizWbg} whiteText={"Interactive"} accentText={"Quizzes"} btnText={"Proceed To Roadmap"} onClick={()=>navigate('/roadmap')} description={
        "Receive real-time feedback on quizzes to refine your skills as you learn. " +
        "Our interactive quizzes are designed to engage you actively, helping you to " +
        "identify areas of strength and those needing improvement. " 
    }/>
        
    </div>
        <Footer/>
      
    </div>
  )
}

export default AssessmentLanding
