import React, { useEffect } from 'react'
import NavbarMain from '../../components/Navbar/NavbarMain'

const AboutMain = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  return (
    <div>
      <NavbarMain/>
    </div>
  )
}

export default AboutMain
