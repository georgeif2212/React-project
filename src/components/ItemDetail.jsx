import Container from "react-bootstrap/Container";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const onAdd = (count) => addItem(product, count);
  let valor = product.precio;

  return (
    <Container>
      <article className="itemDetail py-3">
        <img src={product.imagen} />
        <div className="itemDetail-info">
          <h1 className="color-1 size-medium_l itemDetail-info__name">
            {product.nombre}
          </h1>

          <h2 className="color-2 size-medium_m itemDetail-info__price">
            $ {product.precio}
          </h2>
          <p className="color-1">
            en tan solo <span> </span>
            <span className="color-offer mb-2">
              3x ${(valor / 3).toFixed(2)} sin intereses
            </span>
          </p>
          <p className="color-2 size-small_l">{product.description}</p>
          <ItemCount  stock={product.stock} onAdd={onAdd} />
        </div>
      </article>
    </Container>
  );
};
