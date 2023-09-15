export const CartItem = ({ item, addItem, removeItem, clear }) => {
  return (
    <article key={item.id}>
      <img
        style={{ width: "20%", height: "auto" }}
        className="producto-carrito__img"
        src={item.imagen}
        alt=""
      />
      <div className="producto-carrito-info">
        <div>
          <h4 className="color-1 size-medium_s mb-2">{item.nombre}</h4>
          <p className="color-2 size-small_l mb-1">{item.description}</p>
        </div>
        <h4 className="color-1 size-medium_s mb-2">
          Cantidad: {item.quantity}
        </h4>
        <div className="producto-carrito-info-extra">
          <p className="color-2 size-medium_s mb-1">
            <b>
              $<span>{item.precio}</span>
            </b>
          </p>
          <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      </div>
    </article>
  );
};
