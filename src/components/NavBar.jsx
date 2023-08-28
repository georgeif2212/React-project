import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/category/men's clothing">Hombres</Nav.Link>
            <Nav.Link href="/category/women's clothing">Mujeres</Nav.Link>
            <Nav.Link href="/category/jewelery">Joyería</Nav.Link>
            <Nav.Link href="/category/electronics">Electrónicos</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
  );
};
