import { Navbar } from "react-bootstrap";
import logo from "../logo.png";
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar expand="md">
          <img src={logo} alt="Logo" className="logo"/>
          <div>
          <Link to="/" className="item">Home</Link>
        <Link to="/intro" className="item">Intro</Link>
        <Link to="/info" className="item">Info</Link>
          </div>

        <span className="navbar-text">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/lucianacaminoscano/">
              <img src={navIcon1} alt="" />
            </a>
            <a href="https://github.com/lucianatux">
              <img src={navIcon2} alt="" />
            </a>
            <a href="https://www.instagram.com/lucianaholamundo/">
              <img src={navIcon3} alt="" />
            </a>
          </div>
        </span>
    </Navbar>
  );
};
