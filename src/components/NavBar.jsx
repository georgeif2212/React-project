import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./Widgets/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ fontWeight: "600" }}>
            FusionStyleHub
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              className="navbar-links"
              as={Link}
              to="/categoryid/ropaHombres"
            >
              Caballero
            </Nav.Link>
            <Nav.Link
              className="navbar-links"
              as={Link}
              to="/categoryid/ropaMujeres"
            >
              Dama
            </Nav.Link>
            <Nav.Link
              className="navbar-links"
              as={Link}
              to="/categoryid/joyeria"
            >
              Joyería
            </Nav.Link>
            <Nav.Link
              className="navbar-links"
              as={Link}
              to="/categoryid/tecnologia"
            >
              Electrónicos
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
