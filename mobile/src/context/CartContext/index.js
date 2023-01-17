import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalValue, setTotalValue] = useState();

  useEffect(() => {
    let value = 0;
    cart.map((item) => {
      value = value + parseFloat(item.valor);
    });
    setTotalValue(value);
  }, [cart]);
  function adicionarItem(item) {
    setCart([...cart, item]);
  }

  function removerItem(index) {
    let newCart = cart.filter((item, i) => i !== index);

    setCart([...newCart]);
  }
  return (
    <CartContext.Provider
      value={{ cart, adicionarItem, removerItem, totalValue }}
    >
      {children}
    </CartContext.Provider>
  );
};
