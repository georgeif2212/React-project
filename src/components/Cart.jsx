import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { items, addItem, removeItem, clear,total} = useContext(CartContext);

  return (
    <Container>
      <h2 className="color-1 size-medium_l mb-2">Carrito de compras</h2>
      <Row>
        <Col lg="8">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addItem={addItem}
              removeItem={removeItem}
              clear={clear}
            />
          ))}
        </Col>
        <Col lg="4">
          <div className="carrito-resumen py-4">
            <h3 className="color-2 size-medium_m pb-3">Resumen</h3>
            <div className="carrito-resumen-calculo">
              <p className="color-2 size-medium_s mb-2">Subtotal</p>
              <p className="color-1 size-medium_s mb-2">
                $ <span>{total()}</span>
              </p>
            </div>
            <div className="carrito-resumen-calculo">
              <p className="color-2 size-medium_s mb-2">
                Gastos de envío estimados
              </p>
              <p className="color-1 size-medium_s mb-2">
                <span id="envio"></span>
              </p>
            </div>
            <div className="carrito-resumen-calculo">
              <p className="color-2 size-medium_s mb-2">Descuento total</p>
              <p className="color-1 size-medium_s mb-4">
                -$ <span id="descuento"></span>
              </p>
            </div>
            <div className="carrito-resumen-calculo-total">
              <p className="color-2 size-medium_s mb-0">Total</p>
              <p className="color-1 size-medium_s mb-0">
                $ <span id="total"></span>
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <Link to={"/cart/infoUser"}>
                <button>Continuar</button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
