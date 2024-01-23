// ProductsContext.tsx
import React, { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";

interface ProductsContextTypes {
  products: any;
  setProducts: React.Dispatch<React.SetStateAction<any[]>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const ProductsContext = createContext<ProductsContextTypes | undefined>(
  undefined
);

export const ProductsContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<any[]>([]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const contextValue: ProductsContextTypes = {
    products,
    setProducts,
    index,
    setIndex,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
