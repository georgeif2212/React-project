import { EmptyCartWidget } from "./Widgets/EmptyCartWidget";
export const EmptyCart = () => {
  return (
    <div className="cart">
      <h2 className="color-2 size-medium_l pt-4 mb-1">
        ¡Tu carrito está vacio!
      </h2>
      <p className="color-3 size-medium_s mb-0">Busca algunos productos</p>
      <EmptyCartWidget width={"200px"} />
    </div>
  );
};
