import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export const Item = ({product}) => {
  let valorRedondeado = (product.price * 16.75).toFixed(2);
  return (
    <Card key={product.id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title className="color-1">$ {valorRedondeado}</Card.Title>
        <Card.Text className="color-2"> {product.title}</Card.Text>
        <Link to={`/item/${product.id}`}><Button  variant="primary">Go somewhere</Button></Link>
      </Card.Body>
    </Card>
  );
};
