import { IconShoppingCartFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <Link to="/cart">
      <IconShoppingCartFilled color="white" size={32} />
      <span>0</span>
    </Link>
  );
};
