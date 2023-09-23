import { useState } from "react";

export const CartItem = ({ item, removeItem, showAction }) => {
  const [showActionState] = useState(showAction);
  return (
    <article className="cartItem" key={item.id}>
      <img className="cartItem__img" src={item.imagen} alt="" />
      <div className="cartItem-info">
        <div style={{ display: "flex" }}>
          <div style={{ paddingTop: "1em" }}>
            <h2 className="color-1 size-medium_s mb-2 cartItem-info__name">
              {item.nombre}
            </h2>
            <p className="color-2 size-small_l mb-1">{item.description}</p>
            {showActionState ? (
              <p
                style={{ width: "auto" }}
                className="color-1 size-medium_s mb-1 cartItem-info__action"
                onClick={() => removeItem(item.id)}
              >
                Eliminar producto
              </p>
            ) : (
              <></>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexFlow: "column",
              justifyContent: "space-between",
              width: "150px",
            }}
          >
            <p style={{ display: "flex", justifyContent: "end" }}>
              Cantidad: {item.quantity}
            </p>

            <p
              style={{
                display: "flex",
                justifyContent: "end",
                fontWeight: "500",
              }}
              className="color-2 size-medium_s mb-1"
            >
              $ {item.precio}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
