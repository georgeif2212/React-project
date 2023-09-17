import { useState } from "react";
import { IconMinus } from '@tabler/icons-react';
import { IconPlus } from '@tabler/icons-react';
export const ItemCount = ({ stock, onAdd }) => {
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
    <div className="itemCount mx-3">
      <div className="itemCount-contador">
        <button className="box-shadow" onClick={handleDecreaseCount}><IconMinus/> </button>
        <span>{count}</span>
        <button className="box-shadow" onClick={handleIncreaseCount}><IconPlus/> </button>
      </div>
      <button className="itemCount-carrito pt-1" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};
