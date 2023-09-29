import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { OuterPanel } from "../components/OuterPanel";


export const Room3 = () => {
  return (
    <section id="room3" className="room">
      <Container>
        <OuterPanel/>
        <div className="title">Room3</div>
        <p className="arrow arrow-up">&#8593;</p>
<p className="arrow arrow-down">&#8595;</p>
<Link to="../room"><p className="arrow arrow-left">&#8592;</p></Link>
          
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