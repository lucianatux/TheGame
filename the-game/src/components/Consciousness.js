import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export const Consciousness = () => {

  
  return (
    <section id="consciousness">
        <div id="room">
        <div className="wall back">
            <div className="door" id="frontdoor"></div>
        </div>
        <div className="wall left">
            <div className="door" id="leftdoor"></div>
        </div>
        <div className="wall right">
            <div className="door" id="rightdoor"></div>
        </div>
        <div className="wall ceiling"></div>
        <div className="wall floor"></div>
    </div>
    </section>
  );
};