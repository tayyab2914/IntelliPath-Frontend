import React, { useEffect, useState } from 'react'
import NavbarMain from '../../../components/Navbar/NavbarMain'
import Footer from '../../../components/Footer/Footer';
import JoinedTribes from './JoinedTribes';
import '../styles/Tribes.css'
import LandingPage from '../../../components/LandingPage/LandingPage';
import { IMAGES } from '../../../data/ImageData';
import { useNavigate } from 'react-router-dom';

const TribesMain = () => {
    const navigate = useNavigate()
    const [HasAlreadyJoinedTribes, setAlreadyHasJoinedTribes] = useState(false);
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  return (
    <div>
      <NavbarMain/>
      <div className="generic-container">
        <div className="tribes-main">
            {!HasAlreadyJoinedTribes && <LandingPage imageSrc={IMAGES.tribesWbg} whiteText={"Connect with"} accentText={"Tribes"} btnText={"Explore Tribes"} onClick={()=>navigate('/tribes/explore')} description={"A dynamic space where learners come together to discuss, collaborate, and share ideas, fostering a vibrant community."}/>}
            {HasAlreadyJoinedTribes && <JoinedTribes />}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default TribesMain
