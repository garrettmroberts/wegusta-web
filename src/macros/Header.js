import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/Header.scss";

function Header() {
  return (
    <div className="Header">
      <header className="header-style">
        <Link className="link" to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </header>
    </div>
  );
}

export default Header;
