import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
import { EmptyCart } from "./EmptyCart";
import { SummaryCart } from "./SummaryCart";

export const Cart = () => {
  const { items, removeItem, clear, total, shippingCosts, discount } =
    useContext(CartContext);

  return (
    <Container style={{ minHeight: "70vh" }}>
      <h1
        style={{ fontWeight: "500" }}
        className="color-1 size-large_s pt-4 mb-2"
      >
        Carrito de compras
      </h1>
      <Row>
        <Col lg="8">
          {items.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              {items.map((item) => (
                <CartItem key={item.id} item={item} removeItem={removeItem} />
              ))}
              <p
                className="cartItem-info__action"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  cursor: "pointer",
                }}
                onClick={() => clear()}
              >
                Vaciar carrito
              </p>
            </>
          )}
        </Col>
        <Col lg="4">
          <SummaryCart
            items={items}
            total={total}
            shippingCosts={shippingCosts}
            discount={discount}
          />
          {items.length === 0 ? (
            <></>
          ) : (
            <div className="d-flex justify-content-center">
              <Link to={"/cart/infoUser"}>
                <button>Continuar</button>
              </Link>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};
