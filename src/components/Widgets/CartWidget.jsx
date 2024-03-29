import { IconShoppingCartDollar } from '@tabler/icons-react';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const CartWidget = () => {
  const {totalWidget}=useContext(CartContext)
  return (
    <Link to="/cart">
      <IconShoppingCartDollar color="white" size={26} />
      <span>{totalWidget}</span>
    </Link>
  );
};
