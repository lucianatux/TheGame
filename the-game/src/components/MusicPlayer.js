import React, { useState } from "react";
import {NavBar} from "../components/NavBar";


export const MusicPlayer = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = React.createRef();
  const toggleMusic = () => {
    if (musicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setMusicPlaying(!musicPlaying);
  };

  return (
    <section className="music-player">
      <NavBar/>
    </section>
  );
};
export default MusicPlayer;
