import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { OuterPanel } from "../components/OuterPanel";


export const Room = () => {
  return (
    <section id="room">
      <Container>
        <NavBar />
        <OuterPanel/>
        <div className="title">Room</div>
          <p className="arrow arrow-up">&#8593;</p>
          <p className="arrow arrow-down">&#8595;</p>
          <p className="arrow arrow-left">&#8592;</p>
          <p className="arrow arrow-right">&#8594;</p>
          <div className="div-innerpanel-button">
          <Link to="/innerpanel">
          <p className="eye inner-button"> &#128065;</p>
          </Link>
        </div>
      </Container>
    </section>
  );
};
