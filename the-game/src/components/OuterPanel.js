import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Responses} from "../components/Responses";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export const OuterPanel = () => {

  const [showResponses, setShowResponses] = useState(false);
  const toggleResponses = () => {
    setShowResponses(!showResponses); 
  };

  return (
    <section id="outerpanel">
      <Navbar className="outer-navbar">
        <div className="title">Outer Panel</div>
        <Link to="/room">
          <button className="game-button">ROOM</button>
        </Link>
        <button
          className="game-button"
          onClick={toggleResponses}
        >
          Responses
        </button>
        {showResponses && <Responses />}
        <p className="m-3">Consciousness</p>
        <Link to="/consciousness">
          <button className="game-button">Consciousness</button>
        </Link>
      </Navbar>
    </section>
  );
};
