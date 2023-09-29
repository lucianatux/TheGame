import { Navbar } from "react-bootstrap";
import logo from "../logo.png";
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";
import { Link } from "react-router-dom";
import soundtrack from "../sounds/lalibertad.mp3";
import React, { useState } from "react";


export const NavBar = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);
    const audioRef = React.createRef();
    const toggleMusic = () => {
      if (musicPlaying) {
        audioRef.current.pause(); // Pausa la reproducción
      } else {
        audioRef.current.play(); // Inicia la reproducción
      }
      setMusicPlaying(!musicPlaying);
    };
  return (
    <Navbar expand="md" className="main-navbar">
      <div className="navbarbrand">
        <img src={logo} alt="Logo" className="logo" />
        <p className="the-game">The Game</p>
      </div>
      <div>
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/info" className="item">
          Info
        </Link>
        <button className={musicPlaying ? 'game-button music music-playing' : 'game-button music'}
       id="music" onClick={toggleMusic}>
           &#9835;
        </button>
        <audio ref={audioRef} src={soundtrack} />
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
