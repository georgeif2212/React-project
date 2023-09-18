import React, { createContext, useState } from "react";
import { useEffect } from "react";
export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [shippingCosts, setShippingCosts] = useState(0);
  const [items, setItems] = useState([]);
  const addItem = (producto, quantity) => {
    // * Se busca si anteriormente se ha metido un producto al carrito con el mismo id
    const existe = items.some((item) => item.id === producto.id);
    // * Si no existe, se agrega al carrito
    if (!existe) setItems((prev) => [...prev, { ...producto, quantity }]);
    // * Si existe
    else {
      // * Se recorre el array y el producto que está en el array del carrito se
      // * le suma la cantidad que se le quiere meter
      const updateItems = items.map((item) => {
        if (item.id === producto.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        } else return item;
      });
      setItems(updateItems);
    }
  };

  // const addItem = (producto, quantity) => console.log(producto, quantity);

  const totalWidget = items.reduce((acc, val) => acc + val.quantity, 0);

  const removeItem = (id) => {
    const itemFiltered = items.filter((item) => item.id !== id);
    setItems(itemFiltered);
  };

  const clear = () => {
    setItems([]);
  };

  const total = () => {
    return items.reduce(
      (acum, valorActual) => acum + valorActual.quantity * valorActual.precio,
      0
    );
  };

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  // * useEffect para calcular los gastos de envio aleatoriamente solo cuando el total 
  // * y los items del carrito cambien
  useEffect(() => {
    const calculatedShippingCosts = getRandomArbitrary(total() / 10, 250);
    setShippingCosts(calculatedShippingCosts);
  }, [total()]);

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        totalWidget,
        items,
        total,
        shippingCosts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
