
    import { Container } from "react-bootstrap";
    import { Link } from "react-router-dom";
    
    
    export const Info = () => {
      return (
        <section id="info">
          <Container>
            <div className="title">Info</div>
            <p>lorem ipsum dolor sit amet, consectetur adip</p>
            <p>
                lorem ipsum dolor sit amet, 
                consectetur adip lorem ipsum 
                dolor sit amet lorem et lorem 
                ipsum dolor sit amet
            </p>
            <img src="" alt=""/>
            <div className="div-home-button">
              <Link to="/">
                <button className="game-button">Home</button>
              </Link>
            </div>
          </Container>
        </section>
      );
    };
    