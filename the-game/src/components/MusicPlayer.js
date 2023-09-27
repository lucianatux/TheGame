import React, { useState } from "react";
import soundtrack from "../sounds/November.mp3";

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
      <button className="game-button music" id="music" onClick={toggleMusic}>
        &#9835;
      </button>
      <audio ref={audioRef} src={soundtrack} />
    </section>
  );
};
export default MusicPlayer;
