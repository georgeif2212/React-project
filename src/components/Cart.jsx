import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
import { EmptyCart } from "./EmptyCart";

export const Cart = () => {
  const { items, addItem, removeItem, clear, total, shippingCosts, discount } =
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
            items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                addItem={addItem}
                removeItem={removeItem}
                clear={clear}
              />
            ))
          )}
        </Col>
        <Col lg="4">
          <div className="cart-summary py-4">
            {items.length === 0 ? (
              <>
                <h3 className="color-2 size-medium_m ">Resumen</h3>
                <p className="color-2 size-medium_s mb-2">
                  Los detalles de tu compra se mostrarán cuando agregues
                  productos
                </p>
              </>
            ) : (
              <>
                <h3 className="color-2 size-medium_m pb-3">Resumen</h3>
                <div className="cart-summary__math">
                  <p className="color-2 size-medium_s mb-2">Subtotal</p>
                  <p className="color-1 size-medium_s mb-2">
                    $ <span>{total()}</span>
                  </p>
                </div>
                <div className="cart-summary__math">
                  <p className="color-2 size-medium_s mb-2">
                    Gastos de envío estimados
                  </p>
                  <p className="color-1 size-medium_s mb-2">
                    <span id="envio">$ {shippingCosts.toFixed(2)}</span>
                  </p>
                </div>
                <div className="cart-summary__math">
                  <p className="color-2 size-medium_s mb-2">Descuento total</p>
                  <p className="color-1 size-medium_s mb-2">
                    -$ {discount.toFixed(2)} <span id="descuento"></span>
                  </p>
                </div>
                <div className="cart-summary__math"style={{borderTop:"solid 1px #ddd9cc"}}>
                  <p className="color-2 size-medium_s pt-2 mb-0">Total</p>
                  <p className="color-1 size-medium_s pt-2 mb-0">
                    $ {(total()+shippingCosts-(1*(discount))).toFixed(2)}<span id="total"></span>
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <Link to={"/cart/infoUser"}>
                    <button>Continuar</button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
