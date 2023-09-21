import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Intro = () => {
    return (
        <section>
            <Container>
            <div className="title">Intro</div>
        <div className="div-button">
          <Link to="/room">
            <button className="start-button">ROOM</button>
          </Link>
        </div>
            </Container>
        </section>
    )}