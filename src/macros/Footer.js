import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Instagram from "../assets/Instagram.svg";
import Twitter from "../assets/Twitter.svg";
import Youtube from "../assets/Youtube.svg";
import "../styles/Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <footer className="footer-style">
        <img src={logo} className="logo" alt="logo" />
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <p>Advertise With Us</p>
          <p>Download the app</p>
        </div>
        <div className="social-links">
          <div className="Social-Link">
            <img src={Instagram} alt="instagram" />
          </div>
          <div className="Social-Link">
            <img src={Twitter} alt="instagram" />
          </div>
          <div className="Social-Link">
            <img src={Youtube} alt="instagram" />
          </div>
        </div>
        <p>© 2022 Wegusta LLC. All rights reserved</p>
      </footer>
    </div>
  );
}

export default Footer;
