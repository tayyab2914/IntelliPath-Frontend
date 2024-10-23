import React, { useEffect } from 'react'
import NavbarMain from "../../components/Navbar/NavbarMain";

const VocalAssistanceMain = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  return (
    <>
      <NavbarMain />
    </>
  )
}

export default VocalAssistanceMain
