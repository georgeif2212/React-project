import Container from "react-bootstrap/Container";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const onAdd = (count) => addItem(product, count);

  let valorRedondeado = (product.precio * 16.75).toFixed(2);
  return (
    <Container>
      <article className="itemDetail">
        <img src={product.imagen} />
        <div className="">
          <h1 className="color-1 text-right">
            {product.nombre}
            {onAdd}
          </h1>

          <h2 className="color-2">$ {valorRedondeado}</h2>
          <p className="color-3">{product.description}</p>
        </div>
        <ItemCount onAdd={onAdd} />
      </article>
    </Container>
  );
};
