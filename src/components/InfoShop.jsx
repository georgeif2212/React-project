import { Container } from "react-bootstrap";
import { CartItem } from "./CartItem";

export const InfoShop = ({ purchase }) => {
  const { total, items, buyer } = purchase;
  return (
    <Container>
      <h2>Comprador: {buyer.name}</h2>
      <p>Tarjeta: {buyer.card}</p>
      <p>Email: {buyer.email}</p>
      <h2>Items: </h2>
      {items.map((item) => (
        <CartItem key={item.id} item={item} showAction={false} />
      ))}
      <h2>Total</h2>
      <p>El total de tu compra fue: {total.toFixed(2)}</p>
    </Container>
  );
};
