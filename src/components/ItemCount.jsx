import { useState } from "react";
const stock = 4;
export const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(1);

  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };
  const handleIncreaseCount = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div className="itemCount">
      <span onClick={handleDecreaseCount}>-</span>
      <span>{count}</span>
      <span onClick={handleIncreaseCount}>+</span>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};
