import React, { useEffect } from "react";
import NavbarMain from "../../components/Navbar/NavbarMain";
import Feature from "./Feature";
import Footer from "../../components/Footer/Footer";
import { FEATURES_DATA } from "../../data/FeaturesData";

const FeaturesMain = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  return (
    <>
      <div className=" bg-deep-dark">
        <NavbarMain version="dark" />
        {FEATURES_DATA.map((data) => ( <Feature data={data} /> ))}
      </div>
      <Footer />
    </>
  );
};

export default FeaturesMain;
