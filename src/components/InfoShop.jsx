import { CartItem } from "./CartItem";
import { useParams } from "react-router-dom";

export const InfoShop = ({ purchase }) => {
  const { total, items, buyer } = purchase;
  const { id } = useParams();
  return (
    <article className="purchase">
      <div className="purchase-buyer">
        <div className="purchase-buyer__text borderBottom">
          <p>ID de compra</p>
          <p className="size-medium_s" style={{ fontWeight: "500" }}>
            {id}
          </p>
        </div>
        <div className="purchase-buyer__text borderBottom">
          <p>Cliente:</p>
          <p className="size-medium_s" style={{ fontWeight: "500" }}>
            {buyer.name}
          </p>
        </div>
        <div className="purchase-buyer__text borderBottom">
          <p className="size-medium_s">Tarjeta:</p>
          <p style={{ fontWeight: "500" }}>{buyer.card}</p>
        </div>
        <div className="purchase-buyer__text borderBottom">
          <p className="size-medium_s">Email:</p>
          <p style={{ fontWeight: "500" }}>{buyer.email}</p>
        </div>
        <div className="purchase-buyer__text borderBottom">
          <p className="size-medium_s">Teléfono:</p>
          <p style={{ fontWeight: "500" }}>{buyer.phone}</p>
        </div>
      </div>
      <div className="purchase-items">
        <p
          className="size-medium_m"
          style={{ paddingTop: "1em", fontWeight: "500" }}
        >
          Articulos comprados:
        </p>
        {items.map((item) => (
          <CartItem key={item.id} item={item} showAction={false} />
        ))}
      </div>
      <div className="purchase-total">
        <p>
          Total: $ <span style={{ fontWeight: "500" }}>{total.toFixed(2)}</span>
        </p>
      </div>
    </article>
  );
};
