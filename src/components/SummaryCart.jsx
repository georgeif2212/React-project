export const SummaryCart = ({items, total, shippingCosts, discount}) => {
  return (
    <div className="cart-summary py-4">
      {items.length === 0 ? (
        <>
          <h3 className="color-2 size-medium_m ">Resumen</h3>
          <p className="color-2 size-medium_s mb-2">
            Los detalles de tu compra se mostrarán cuando agregues productos
          </p>
        </>
      ) : (
        <>
          <h3 className="color-2 size-medium_m pb-3">Resumen</h3>
          <div className="cart-summary__math">
            <p className="color-2 size-medium_s mb-2">Subtotal</p>
            <p className="color-1 size-medium_s mb-2">
              $ <span>{total()}</span>
            </p>
          </div>
          <div className="cart-summary__math">
            <p className="color-2 size-medium_s mb-2">
              Gastos de envío estimados
            </p>
            <p className="color-1 size-medium_s mb-2">
              <span id="envio">$ {shippingCosts.toFixed(2)}</span>
            </p>
          </div>
          <div className="cart-summary__math">
            <p className="color-2 size-medium_s mb-2">Descuento total</p>
            <p className="color-1 size-medium_s mb-2">
              -$ {discount.toFixed(2)} <span id="descuento"></span>
            </p>
          </div>
          <div
            className="cart-summary__math"
            style={{ borderTop: "solid 1px #ddd9cc" }}
          >
            <p className="color-2 size-medium_s pt-2 mb-0">Total</p>
            <p className="color-1 size-medium_s pt-2 mb-0">
              $ {(total() + shippingCosts - 1 * discount).toFixed(2)}
              <span id="total"></span>
            </p>
          </div>

        </>
      )}
    </div>
  );
};
