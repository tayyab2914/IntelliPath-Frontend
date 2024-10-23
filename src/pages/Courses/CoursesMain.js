import React, { useEffect } from 'react'
import NavbarMain from "../../components/Navbar/NavbarMain";

const CoursesMain = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  return (
    <>
      <NavbarMain />
    </>
  )
}

export default CoursesMain
