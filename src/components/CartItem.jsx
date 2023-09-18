export const CartItem = ({ item, addItem, removeItem, clear }) => {
  return (
    <article className="cartItem" key={item.id}>
      <img className="cartItem__img" src={item.imagen} alt="" />
      <div className="cartItem-info">
        <div style={{ display: "flex" }}>
          <div>
            <h2 className="color-1 size-medium_s mb-2 cartItem-info__name">
              {item.nombre}
            </h2>
            <p className="color-2 size-small_l mb-1">{item.description}</p>
            <div style={{ display: "flex", alignSelf: "end" }}>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => removeItem(item.id)}
              >
                Eliminar
              </p>
            </div>
          </div>
          <div>
            <p className="color-1 size-medium_s mb-2">
              Cantidad: {item.quantity}
            </p>

            <p className="color-2 size-medium_s mb-1">
              <b>
                $<span>{item.precio}</span>
              </b>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
