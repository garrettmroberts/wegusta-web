import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
// import Instagram from "../assets/Instagram.svg";
// import Twitter from "../assets/Twitter.svg";
// import Youtube from "../assets/Youtube.svg";
import "../styles/Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <footer className="footer-style">
        <Link className="link" to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className="links">
          <Link className="link" to="/">
            Home
          </Link>
          {/* <Link className="link" to="/privacy">
            Privacy Policy
          </Link> */}
          {/* <Link className="link" to="/privacy">
            Advertise With Us
          </Link> */}
          <Link className="link" to="#">
            Download the app
          </Link>
        </div>
        {/* <div className="social-links">
          <div className="Social-Link">
            <img src={Instagram} alt="instagram" />
          </div>
          <div className="Social-Link">
            <img src={Twitter} alt="instagram" />
          </div>
          <div className="Social-Link">
            <img src={Youtube} alt="instagram" />
          </div>
        </div> */}
        <p>© 2022 Wegusta LLC. All rights reserved</p>
      </footer>
    </div>
  );
}

export default Footer;
