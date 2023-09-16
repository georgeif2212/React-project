import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
export const Item = ({ product }) => {
  let valor = product.precio;
  let valorNoDiscount = valor * 1.27;
  let productDescription = product.description;

  const words = productDescription.split(" ");
  if (words.length > 9) {    
    const truncatedDescription = words.slice(0, 9).join(" ") + " ...";
    productDescription =truncatedDescription
  }

  return (
    <article key={product.id} className="box-shadow item pb-2">
      <img
        src={product.imagen}
        style={{ objectFit: "contain", width: "100%", height: "50%" }}
      />

      <div className="item-info">
        <p
          className="color-2 size-small_m mb-1"
          style={{ textDecoration: "line-through" }}
        >
          $ {valorNoDiscount}
        </p>
        <h3 className="color-1 size-medium_m mb-1">$ {valor}</h3>
        <p className="color-offer size-small_l mb-2">
          <b>3x ${(valor / 3).toFixed(2)} sin intereses</b>
        </p>
        <p className="color-2 size-small_l mb-2">{productDescription}</p>

        <div className="d-flex justify-content-end">
          <Link to={`/item/${product.id}`}>
            <button class="compra" role="button">
              ¡Comprar!
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};
