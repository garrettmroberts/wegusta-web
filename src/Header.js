import logo from "./logo.svg";
import "./Header.scss";

function Header() {
  return (
    <div className="Header">
      <header className="header-style">
        <img src={logo} className="logo" alt="logo" />
      </header>
    </div>
  );
}

export default Header;
