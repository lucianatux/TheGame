import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import planeta from "../assets/tierra2.png";


export const Intro = () => {
  return (
    <section id="intro">
      <Container>
        <div className="title">Intro</div>
        <p>lorem ipsum dolor sit amet, consectetur adip</p>
        <Link to="/room">
            <img src={planeta} alt="planeta" className="planeta"/>
          </Link>
        <div className="div-room-button">
          
        </div>
      </Container>
    </section>
  );
};
