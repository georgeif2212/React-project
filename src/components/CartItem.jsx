export const CartItem = ({ item }) => {
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
        <div className="producto-carrito-info-extra">
          <p className="color-2 size-medium_s mb-1">
            <b>
              $<span>{item.precio}</span>
            </b>
          </p>
          <button>
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none"
            >
              <path
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="M14.25 7.5v12m-4.5-12v12M5.25 6v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V5.25h2.75m-2.75 0H21m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};
