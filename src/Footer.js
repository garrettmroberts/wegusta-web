import logo from "./logo.svg";
import Instagram from "./Instagram.svg";
import Twitter from "./Twitter.svg";
import Youtube from "./Youtube.svg";
import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <footer className="footer-style">
        <img src={logo} className="logo" alt="logo" />
        <div className="links">
          <a href="./index.js">Home</a>
          <a href="./Privacy.js">Privacy Policy</a>
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
