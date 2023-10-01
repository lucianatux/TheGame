import logo from "../logo.png";
import navIcon3 from "../assets/nav-icon3.svg";
import { Link } from "react-router-dom";
import soundtrack from "../sounds/lalibertad.mp3";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



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
    <div className="main-navbar">
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
      
          <a href="https://www.instagram.com/lucianaholamundo/">
            <img src={navIcon3} alt="" />
          </a>
        </div>
      </span>
    </div>
  );
};
