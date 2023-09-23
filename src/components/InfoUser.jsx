import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { CreditCardWidget } from "./Widgets/CreditCardWidget";
import { SummaryCart } from "./SummaryCart";
import React from "react";
import { notificacion, warn, error } from "./toasts/Toasts";
import { useNavigate } from "react-router-dom";

export const InfoUser = () => {
  const navigate = useNavigate();

  const { items, clear, total, shippingCosts, discount } =
    useContext(CartContext);

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
    if (validateForm()) {
      const db = getFirestore();
      const orderCollection = collection(db, "orders");
      addDoc(orderCollection, order).then(({ id }) => {
        if (id) {
          setFormValues({ name: "", phone: "", email: "", card: "" });
          clear();
          navigate(`/cart/InfoShop/${id}`);
          notificacion();
        } else {
          error();
        }
      });
    } else {
      warn();
    }
  };

  const validateForm = () => {
    const { name, phone, email, card } = formValues;

    // * Que los campos no esten vacios
    if (
      name.trim() === "" ||
      phone.trim() === "" ||
      email.trim() === "" ||
      card.trim() === ""
    ) {
      return false;
    }

    return true;
  };

  return (
    <Container style={{ paddingTop: "2em", minHeight: "70vh" }}>
      <h1>Ingresa tus datos para la compra</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <Row>
          <Col lg="8">
            <Row>
              <Col
                lg="6"
                style={{
                  display: "flex",
                  flexFlow: "column",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <input
                  onChange={handleChange}
                  value={formValues.name}
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Nombre completo"
                  required
                  autoComplete="off"
                />

                <input
                  onChange={handleChange}
                  value={formValues.email}
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                  required
                  autoComplete="off"
                />

                <input
                  onChange={handleChange}
                  value={formValues.phone}
                  type="tel"
                  name="phone"
                  className="form-control mt-3 mt-md-0"
                  placeholder="Numero teléfonico"
                  required
                  autoComplete="off"
                />

                <input
                  onChange={handleChange}
                  value={formValues.card}
                  type="text"
                  name="card"
                  className="form-control mt-3 mt-md-0"
                  placeholder="1234 5678 9012 3456"
                  required
                  autoComplete="off"
                />
              </Col>
              <Col lg="6">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <CreditCardWidget width={"350px"} />
                </div>
              </Col>
            </Row>
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
              <div style={{ display: "flex", justifyContent: "center", paddingTop:"1em"}}>
                <button
                className="comprar"
                  type="button"
                  onClick={() => {
                    sendOrder();
                  }}
                >
                  Comprar
                </button>
              </div>
            )}
          </Col>
        </Row>
      </form>
    </Container>
  );
};
