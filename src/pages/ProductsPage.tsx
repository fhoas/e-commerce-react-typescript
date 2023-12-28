import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";
import { ProductsContext } from "../context/ProductsContext";
import Products from "../components/products/Products";

const ProductsPage: React.FC = () => {
  const { test } = useContext(MainContext) || {};
  const { products } = useContext(ProductsContext) || {};

  return (
    <div className="p-8 grid grid-cols-4 gap-8 min-h-[calc(100vh-136px)]">
      {products.map((product: any, id: number) => (
        <div key={id}>
          <Products product={product} id={id} />
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
