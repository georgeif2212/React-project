import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const InfoUser = () => {
  const { items, clear, total } = useContext(CartContext);

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    card: "",
  });

  const handleChange = (ev) => {
    setFormValues((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
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
      <form>
        <Row>
          <Col md="6">
            <input
              onChange={handleChange}
              value={formValues.name}
              type="text"
              name="name"
              className="form-control"
              placeholder="Nombre completo"
              required
            />
          </Col>
          <Col md="6">
            <input
              onChange={handleChange}
              value={formValues.email}
              type="email"
              name="email"
              className="form-control"
              placeholder="Correo electrónico"
              required
            />
          </Col>
          <Col md="6">
            <input
              onChange={handleChange}
              value={formValues.phone}
              type="tel"
              name="phone"
              className="form-control mt-3 mt-md-0"
              placeholder="Numero teléfonico"
              required
            />
          </Col>
          <Col md="6">
            <input
              onChange={handleChange}
              value={formValues.card}
              type="text"
              name="card"
              className="form-control mt-3 mt-md-0"
              pattern="[0-9]{13,19}"
              placeholder="1234 5678 9012 3456"
            />
          </Col>
          <button onClick={() => sendOrder()}>Comprar</button>
        </Row>
      </form>
    </Container>
  );
};
