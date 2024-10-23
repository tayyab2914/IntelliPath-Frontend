import React, { useEffect } from 'react'
import NavbarMain from "../../components/Navbar/NavbarMain";

const DashboardMain = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  return (
    <>
      <NavbarMain />
    </>
  )
}

export default DashboardMain
