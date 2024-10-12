import React, { useEffect } from "react";
import NavbarMain from "../../components/Navbar/NavbarMain";
import Hero from "./Hero";
import InnovativeTools from "./InnovativeTools";
import Decoration from "./Decoration";
import FAQ from "./FAQ";
import Decoration2 from "./Decoration2";
import Footer from "../../components/Footer/Footer";

const HomeMain = () => {
    
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <div className=" unselectable">
      <div className=" bg-deep-dark">
        <NavbarMain version="dark" />
        <Hero />
      </div>
      <InnovativeTools />
      <Decoration />
      <FAQ />
      <div className=" bg-deep-dark">
        <Decoration2 />
      </div>
      <Footer/>
    </div>
  );
};

export default HomeMain;
