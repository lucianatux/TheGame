import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export const Thoughts = () => {
  const [room, setRoom] = useState("Room1");
  const [thoughts, setThoughts] = useState({
    Room1: [
      "Pensamiento 1.1",
      "Pensamiento 1.2",
      "Pensamiento 1.3",
      "Pensamiento 1.4",
    ],
    Room2: [
      "Pensamiento 2.1",
      "Pensamiento 2.2",
      "Pensamiento 2.3",
      "Pensamiento 2.4",
    ],
    Room3: [
      "Pensamiento 3.1",
      "Pensamiento 3.2",
      "Pensamiento 3.3",
      "Pensamiento 3.4",
    ],
  });
  const [showThoughts, setShowThoughts] = useState(false);

  const handleRoomChange = (newRoom) => {
    if (newRoom === room) {
      setShowThoughts(!showThoughts);
    } else {
      setRoom(newRoom);
      setShowThoughts(true);
    }
  };

  const handleThoughtChange = (index, newText) => {
    const updatedThoughts = [...thoughts[room]];
    updatedThoughts[index] = newText;

    setThoughts({
      ...thoughts,
      [room]: updatedThoughts,
    });
  };

  return (
    <section id="thoughts">
      <Container>
        <div className="title">Thoughts</div>
        <Link to="/innerpanel">
          <button className="game-button">InnerPanel</button>
        </Link>
        <div>
            <button
              className="game-button"
              onClick={() => handleRoomChange("Room1")}
            >
              Room 1
            </button>
            <button
              className="game-button"
              onClick={() => handleRoomChange("Room2")}
            >
              Room 2
            </button>
            <button
              className="game-button"
              onClick={() => handleRoomChange("Room3")}
            >
              Room 3
            </button>
        </div>
        {showThoughts && (
        <>
          <h2>{`Pensamientos en ${room}`}</h2>

          <ul>
            {thoughts[room].map((thought, index) => (
              <li key={index}>
                <input
                  type="text"
                  value={thought}
                  onChange={(e) => handleThoughtChange(index, e.target.value)}
                />
              </li>
            ))}
          </ul>
        </>
      )}
      </Container>
    </section>
  );
};
