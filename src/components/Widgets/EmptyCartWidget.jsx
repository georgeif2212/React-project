import { ReactComponent as CartSvg } from "../../assets/emptyCart.svg";

export const EmptyCartWidget = ({width}) => {
  return (
    <div style={{opacity:"0.5"}}>
      <CartSvg style={{width:width,height:"auto"}}/>
    </div>
  );
};
