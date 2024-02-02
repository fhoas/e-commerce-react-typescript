// ProductsPage.tsx
import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import Products from "../components/products/Products";
import Categories from "../components/categories/Categories";

const ProductsPage: React.FC = () => {
  const { filteredProducts } = useContext(ProductsContext) || {};

  return (
    <div>
      <Categories />
      <div className="px-8 sm:px-8 md:px-16 py-4 sm:py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-8 min-h-[calc(100vh-136px)]">
        {filteredProducts?.map((product: any, id: number) => (
          <div key={id} className="mb-4">
            <Products product={product} id={product.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
