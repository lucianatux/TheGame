import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import planeta from "../assets/tierra2.png";


export const Intro = () => {
  return (
    <section id="intro">
      <Container>
        <div className="title">Intro</div>
        <p>lorem ipsum dolor sit amet, consectetur adip</p>
        <img src={planeta} alt="planeta"/>
        <div className="div-room-button">
          <Link to="/room">
            <button className="game-button">ROOM</button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
