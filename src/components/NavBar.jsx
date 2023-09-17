import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            FusionStyleHub
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link as={Link} to="/categoryid/ropaHombres">
              Caballero
            </Nav.Link>

            <Nav.Link as={Link} to="/categoryid/ropaMujeres">
              Dama
            </Nav.Link>

            <Nav.Link as={Link} to="/categoryid/joyeria">
              Joyería
            </Nav.Link>

            <Nav.Link as={Link} to="/categoryid/tecnologia">
              Electrónicos
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
