import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
import { EmptyCart } from "./EmptyCart";
import { SummaryCart } from "./SummaryCart";
import SweetAlert2 from "react-sweetalert2";
import { useState } from "react";

export const Cart = () => {
  const [swalProps, setSwalProps] = useState({});
  function vaciarCarrito() {
    setSwalProps({
      show: true,
      title: "¿Seguro quieres vaciar el carrito?",
      showCancelButton: true,
      confirmButtonColor: "#00a650",
      cancelButtonColor: "#B7B7B7",
      confirmButtonText: "Vaciar carrito",
      backdrop: "rgba(39, 56, 245, 0.18)",
    });
  }

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
                <CartItem
                  key={item.id}
                  item={item}
                  removeItem={removeItem}
                  showAction={true}
                />
              ))}
              <p
                className="cartItem-info__action"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  cursor: "pointer",
                }}
                onClick={() => {
                  vaciarCarrito();
                  // clear();
                }}
              >
                Vaciar carrito
              </p>
              <SweetAlert2
                {...swalProps}
                onConfirm={() => {
                  clear();
                }}
                didClose={() => {
                  setSwalProps({});
                }}
              />
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
                <button className="comprar">Continuar</button>
              </Link>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};
