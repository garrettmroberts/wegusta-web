import React from "react";
import ReactDOM from "react-dom";
import "./Privacy.scss";
import Header from "./Header";
import Footer from "./Footer";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div className="Privacy">
      <p>Updated Jule 09, 2020</p>
      <h1>Privacy Ploicy</h1>
      <p>Version 2.1, Revision 4</p>
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
