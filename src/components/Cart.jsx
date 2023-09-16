import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { CartItem } from "./CartItem";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { InfoUser } from "./InfoUser";

export const Cart = () => {
  const { items, addItem, removeItem, clear } = useContext(CartContext);

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    card: "",
  });

  const handleChange = (ev) => {
    setFormValues((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
  };

  const total = () => {
    return items.reduce(
      (acum, valorActual) => acum + valorActual.quantity * valorActual.precio,
      0
    );
  };

  const sendOrder = () => {
    const order = {
      buyer: formValues,
      items: items,
      total: total(),
    };
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        setFormValues({ name: "", phone: "", email: "", card: "" });
        clear();
      }
    });
  };

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
              <button onClick={() => sendOrder()}>Comprar</button>
            </div>
          </div>
        </Col>
      </Row>
      <InfoUser formValues={formValues} handleChange={handleChange} />
    </Container>
  );
};
