import { Link } from "react-router-dom";
export const Item = ({ product }) => {
  let valor = product.precio;
  let valorNoDiscount = valor * 1.27;
  let productDescription = product.description;

  const limit = 64; // Límite de caracteres
  const text = product.description; // Tu descripción de producto

  if (text.length > limit) {
    const truncatedText = text.substring(0, limit - 3) + " ...";
    productDescription = truncatedText;
  } else {
    productDescription = text; // Si no se excede el límite, mantén el texto original.
  }

  return (
    <article key={product.id} className="box-shadow item pb-3">
      <img
        src={product.imagen}
        style={{ objectFit: "contain", width: "100%", height: "50%" }}
        alt=""
      />

      <div className="item-info">
        <p
          className="color-2 size-small_m mb-1"
          style={{ textDecoration: "line-through" }}
        >
          $ {valorNoDiscount}
        </p>
        <h3 className="color-1 size-medium_m mb-1" style={{fontWeight:"500"}}>$ {valor}</h3>
        <p className="color-offer size-small_l mb-2"style={{fontWeight:"500"}}>
          3x ${(valor / 3).toFixed(2)} sin intereses
        </p>
        <p className="color-2 size-small_m mb-2">{productDescription}</p>

        <div className="d-flex justify-content-end">
          <Link to={`/item/${product.id}`}>
            <button className="comprar">
              Ver más
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};
