import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const InfoUser = ({ formValues, handleChange }) => {
  return (
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
      </Row>
    </form>
  );
};
