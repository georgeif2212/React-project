import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export const Item = ({ product }) => {
  let valor = (product.precio).toFixed(2);
  let valorNoDiscount = (valor * 1.27).toFixed(2);
  let nameShort;
  product.nombre.length > 45
    ? (nameShort = product.nombre.slice(0, 50) + "...")
    : (nameShort = product.nombre);

  return (
    <Card
      key={product.id}
      style={{ width: "20rem", height: "400px" }}
      className="product"
    >
      <Card.Img
        variant="top"
        src={product.imagen}
        className="product"
        style={{ objectFit: "contain", width: "100%", height: "50%" }}
      />

      <Card.Body className="product__body">
        <Card.Text
          className="color-3 size-small_l"
          style={{ textDecoration: "line-through" }}
        >
          $ {valorNoDiscount}
        </Card.Text>
        <Card.Title className="color-1 size-medium_m">
          $ {valor}
        </Card.Title>
        <Card.Text className="color-2" style={{}}>
          {" "}
          {nameShort}
        </Card.Text>

        <div className="d-flex justify-content-end">
          <Link to={`/item/${product.id}`}>
            <Button variant="success">Comprar!</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
