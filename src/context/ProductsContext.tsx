import React, { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";

interface ProductsContextTypes {
  products: any;
  setProducts: React.Dispatch<React.SetStateAction<any[]>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
  filteredProducts: any[];
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductsContext = createContext<ProductsContextTypes | undefined>(
  undefined
);

export const ProductsContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(true); // Yükleme durumu için ekledik

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      const productsData = response.data.products.slice(0, 30);
      const productsWithCustomId = productsData.map(
        (product: any, index: number) => ({
          ...product,
          customId: index + 1,
        })
      );
      setProducts(productsWithCustomId);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === activeCategory
      );
      setFilteredProducts(filtered);
    }
  }, [activeCategory, products]);

  const contextValue: ProductsContextTypes = {
    products,
    setProducts,
    index,
    setIndex,
    activeCategory,
    setActiveCategory,
    filteredProducts,
    loading,
    setLoading
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
