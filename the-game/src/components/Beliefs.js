import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export const Beliefs = () => {
  const [room, setRoom] = useState("Room1");
  const [beliefs, setBeliefs] = useState({
    Room1: [
      "Creencia 1.1",
      "Creencia 1.2",
      "Creencia 1.3",
      "Creencia 1.4",
    ],
    Room2: [
      "Creencia 2.1",
      "Creencia 2.2",
      "Creencia 2.3",
      "Creencia 2.4",
    ],
    Room3: [
      "Creencia 3.1",
      "Creencia 3.2",
      "Creencia 3.3",
      "Creencia 3.4",
    ],
  });
  const [showBeliefs, setShowBeliefs] = useState(false);

  const handleRoomChange = (newRoom) => {
    if (newRoom === room) {
      setShowBeliefs(!showBeliefs);
    } else {
      setRoom(newRoom);
      setShowBeliefs(true);
    }
  };

  const handleBeliefChange = (index, newText) => {
    const updatedBeliefs = [...beliefs[room]];
    updatedBeliefs[index] = newText;

    setBeliefs({
      ...beliefs,
      [room]: updatedBeliefs,
    });
  };


  return (
    <section id="beliefs">
      <Container>
        <div className="title">Beliefs</div>
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
        {showBeliefs && (
        <>
          <h2>{`Creencias en ${room}`}</h2>

          <ul>
            {beliefs[room].map((belief, index) => (
              <li key={index}>
                <input
                  type="text"
                  value={belief}
                  onChange={(e) => handleBeliefChange(index, e.target.value)}
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