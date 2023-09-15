import { Container } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const Cart = () => {
  const {}= useContext(CartContext)
  return (
    <Container>
      <h1>Cart</h1>
    </Container>
  );
};
