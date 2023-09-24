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
          <div className="shooting-star1"></div>
          <div className="shooting-star2"></div>
         {/* <div className="shiny"></div> */}
         <img src={planeta} alt="planeta" className="planeta"/>
          </Link>
        <div className="div-room-button">
          
        </div>
      </Container>
    </section>
  );
};
