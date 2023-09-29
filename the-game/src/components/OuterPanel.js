import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const OuterPanel = () => {
  return (
    <section id="outerpanel">
      <Navbar className="outer-navbar">
        <div className="title">Outer Panel</div>
        <Link to="/room">
          <button className="game-button">ROOM</button>
        </Link>
        <Link to="/responses">
          <button className="game-button">Responses</button>
        </Link>
      </Navbar>
    </section>
  );
};
