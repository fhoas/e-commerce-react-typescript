import React, { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import Products from "../components/products/Products";
import Categories from "../components/categories/Categories";
import MenuCarousel from "../components/carousel/MenuCarousel";

const ProductsPage: React.FC = () => {
  const { filteredProducts } = useContext(ProductsContext) || {};
  const [sortOrder, setSortOrder] = useState("high-to-low");

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const sortProducts = (products: any[]) => {
    const sortedProducts = [...products];
    if (sortOrder === "low-to-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    return sortedProducts;
  };

  return (
    <div>
      <MenuCarousel />
      <Categories />
      <div className="px-8 sm:px-8 md:px-16 py-4 sm:py-4">
        <div className="flex justify-end items-center mb-4">
          <label htmlFor="sortOrder" className="mr-2">
            Price Sorting:
          </label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={handleSortOrderChange}
            className="p-2 outline-0 border rounded bg-gray9 hover:bg-gray8 border-gray6 hover:border-gray5"
          >
            <option value="high-to-low">High To Low</option>
            <option value="low-to-high">Low To High</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-8 min-h-[calc(100vh-136px)]">
          {sortProducts(filteredProducts || []).map((product: any) => (
            <div key={product.customId} className="mb-4">
              <Products product={product} id={product.customId} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;