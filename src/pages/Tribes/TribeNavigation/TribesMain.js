import React, { useEffect, useState } from 'react'
import NavbarMain from '../../../components/Navbar/NavbarMain'
import Footer from '../../../components/Footer/Footer';
import TribesLandingPage from './TribesLandingPage';
import JoinedTribes from './JoinedTribes';
import '../styles/Tribes.css'

const TribesMain = () => {
    const [HasAlreadyJoinedTribes, setAlreadyHasJoinedTribes] = useState(true);
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  return (
    <div>
      <NavbarMain/>
      <div className="generic-container">
        <div className="tribes-main">
            {!HasAlreadyJoinedTribes && <TribesLandingPage />}
            {HasAlreadyJoinedTribes && <JoinedTribes />}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default TribesMain
