import React, { useState } from "react";
import soundtrack from "../sounds/DaPacemDomine.mp3";

export const MusicPlayer = () => {
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
    <div>
    <button className="game-button music" id="music" onClick={toggleMusic}>
           &#9835;
        </button>
        <audio ref={audioRef} src={soundtrack} />
    </div>
  );
};
 export default MusicPlayer;


