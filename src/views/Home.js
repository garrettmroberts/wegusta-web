import React from "react";
import Header from "../macros/Header";
import Hero from "../macros/Hero";
import SectionOne from "../macros/SectionOne";
// import Advertise from "../macros/Advertise";
import Footer from "../macros/Footer";

const Home = () => {
  return(
    <div>
      <Header />
      <Hero />
      <SectionOne />
      {/* <Advertise /> */}
      <Footer />
    </div>
  )
}

export default Home;
