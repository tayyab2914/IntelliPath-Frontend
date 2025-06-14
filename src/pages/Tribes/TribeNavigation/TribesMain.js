import React, { useEffect, useState } from 'react'
import NavbarMain from '../../../components/Navbar/NavbarMain'
import Footer from '../../../components/Footer/Footer';
import JoinedTribes from './JoinedTribes';
import '../styles/Tribes.css'
import LandingPage from '../../../components/LandingPage/LandingPage';
import { IMAGES } from '../../../data/ImageData';
import { useNavigate } from 'react-router-dom';
import { API_GET_JOINED_TRIBES } from '../../../apis/TribeApis';
import { Spin } from 'antd';
import { useSelector } from 'react-redux';

const TribesMain = () => {
    const navigate = useNavigate()
    const [ShowSpinner, setShowSpinner] = useState(false);
    const { token, rerender_tribe_page} = useSelector((state) => state.authToken);
    const [HasAlreadyJoinedTribes, setAlreadyHasJoinedTribes] = useState(true);

    const fetchJoinedTribes = async()=>{
        const response = await API_GET_JOINED_TRIBES(token,setShowSpinner)
        setAlreadyHasJoinedTribes(response?.length>0)
    }

    useEffect(()=>{
      //! calling this api to check whether we have to show landing page (if no tribes joined) or joinedtribe also rerenders if global state is changed
        fetchJoinedTribes()
    },[rerender_tribe_page])

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  return (
    <div>
    {/* {ShowSpinner && <Spin fullscreen/>} */}
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
