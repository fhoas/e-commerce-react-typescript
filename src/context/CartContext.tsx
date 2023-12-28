import React, { createContext, ReactNode, useState } from "react";

interface types {
  cartItems: any[];
  setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
}

const initialValue = {
  cartItems: [] as any[],
  setCartItems: () => {},
};

export const CartContext = createContext<types | undefined>(undefined);

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<any[]>(initialValue.cartItems);

  const contextValue: types = {
    cartItems,
    setCartItems,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
