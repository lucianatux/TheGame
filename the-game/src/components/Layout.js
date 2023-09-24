import React from "react";
import MusicPlayer from "./MusicPlayer"; 

export const Layout = ({ children }) => {
  return (
    <div>
      <MusicPlayer /> 
      {children}
    </div>
  );
};