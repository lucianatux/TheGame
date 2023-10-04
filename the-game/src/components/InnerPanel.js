import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


export const InnerPanel = () => {
  return (
    <section id="innerpanel">
      <Container>
        <div className="title">Inner Panel</div>
        <p>lorem ipsum dolor sit amet, consectetur adip</p>
        <div className="div-room-button">
          <Link to="/room">
            <button className="game-button">ROOM</button>
          </Link>
          <Link to="/thoughts">
            <button className="game-button">THOUGHTS</button>
          </Link>
          <Link to="/feelings">
            <button className="game-button">FEELINGS</button>
          </Link>
        </div>
      </Container>
    </section>
  );
};