import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="home" id="home">
      <Container>
        <div className="title">Home</div>
        <div className="div-button">
          <Link to="/intro">
            <button className="start-button">START</button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
