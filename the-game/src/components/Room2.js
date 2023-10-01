import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { OuterPanel } from "../components/OuterPanel";

export const Room2 = () => {
  return (
    <section id="room2" className="room">
         <OuterPanel />
      <Container>
     
        <div className="title">Room2</div>
        <p className="arrow arrow-up">&#8593;</p>
        <p className="arrow arrow-down">&#8595;</p>

        <p className="arrow arrow-left">&#8592;</p>
        <Link to="/room">
          <p className="arrow arrow-right">&#8594;</p>
        </Link>
        <div className="div-innerpanel-button">
          <Link to="/innerpanel">
            <p className="eye inner-button"> &#128065;</p>
          </Link>
        </div>
      </Container>
    </section>
  );
};
