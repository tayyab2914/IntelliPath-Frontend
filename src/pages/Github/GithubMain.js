import React, { useEffect } from 'react'
import NavbarMain from '../../components/Navbar/NavbarMain'
import { Col, Row } from 'antd';
import useWindowWidth from '../../hooks/useWindowWidth';
import MyButton from '../../components/Button/Button';
import { IMAGES } from '../../data/ImageData';
import { useNavigate } from 'react-router-dom';
import LandingPage from '../../components/LandingPage/LandingPage';
import Footer from '../../components/Footer/Footer';

const GithubMain = () => {
    const windowWidth = useWindowWidth()
    const navigate = useNavigate()
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  return (
    <div>
      <NavbarMain/>
      <div className="generic-container">
      <LandingPage imageSrc={IMAGES.githubWbg} whiteText={"Github Contribution"} accentText={"Tracking"} btnText={"Proceed To Roadmap"} onClick={()=>navigate('/roadmap')} description={"Connect your GitHub to track project contributions. Showcase your coding activity and open-source involvement, enhancing your portfolio for potential employers."}/>
        
    </div>
    <Footer/>
    </div>
  )
}

export default GithubMain

