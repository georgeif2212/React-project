import React, { createContext, useState } from "react";
export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  // const addItem = (producto, quantity) =>
  //   setItems((prev) => [...prev, { ...producto, quantity }]);
  const addItem = (producto,quantity) => console.log(producto,quantity);;

  const removeItem = (id) => {
    const itemFiltered = items.filter((item) => item.id !== id);
    setItems(itemFiltered);
  };

  const clear = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};