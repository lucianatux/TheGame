import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export const Feelings = () => {
  const [room, setRoom] = useState("Room1");
  const [feelings, setFeelings] = useState({
    Room1: [
      "Sentimiento 1.1",
      "Sentimiento 1.2",
      "Sentimiento 1.3",
      "Sentimiento 1.4",
    ],
    Room2: [
      "Sentimiento 2.1",
      "Sentimiento 2.2",
      "Sentimiento 2.3",
      "Sentimiento 2.4",
    ],
    Room3: [
      "Sentimiento 3.1",
      "Sentimiento 3.2",
      "Sentimiento 3.3",
      "Sentimiento 3.4",
    ],
  });
  const [showFeelings, setShowFeelings] = useState(false);

  const handleRoomChange = (newRoom) => {
    if (newRoom === room) {
      setShowFeelings(!showFeelings);
    } else {
      setRoom(newRoom);
      setShowFeelings(true);
    }
  };

  const handleFeelingChange = (index, newText) => {
    const updatedFeelings = [...feelings[room]];
    updatedFeelings[index] = newText;

    setFeelings({
      ...feelings,
      [room]: updatedFeelings,
    });
  };

  return (
    <section id="feelings">
      <Container>
        <div className="title">Feelings</div>
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
        {showFeelings && (
        <>
          <h2>{`Sentimientos en ${room}`}</h2>

          <ul>
            {feelings[room].map((feeling, index) => (
              <li key={index}>
                <input
                  type="text"
                  value={feeling}
                  onChange={(e) => handleFeelingChange(index, e.target.value)}
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