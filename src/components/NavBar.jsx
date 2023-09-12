import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className="navbar">
        <Container>
          <Navbar.Brand href="#home">FusionStyleHub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/category/men's clothing">Hombres</Nav.Link>
            <Nav.Link href="/category/women's clothing">Mujeres</Nav.Link>
            <Nav.Link href="/category/jewelery">Joyería</Nav.Link>
            <Nav.Link href="/category/electronics">Electrónicos</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
