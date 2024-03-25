import React, { createContext, ReactNode, useState } from "react";

interface CartContextTypes {
  cartItems: any[];
  setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
}

const initialValue: CartContextTypes = {
  cartItems: [],
  setCartItems: () => {},
};

export const CartContext = createContext<CartContextTypes | undefined>(
  undefined
);

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<any[]>(initialValue.cartItems);

  const contextValue: CartContextTypes = {
    cartItems,
    setCartItems,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};