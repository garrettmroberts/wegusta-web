import React from "react";
import "../styles/Privacy.scss";
import Header from "../macros/Header";
import Footer from "../macros/Footer";

const Privacy = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="Privacy">
        <p>Updated Jule 09, 2020</p>
        <h1>Privacy Ploicy</h1>
        <p>Version 2.1, Revision 4</p>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Privacy;
