import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

const DetailsPage: React.FC = () => {
  const { index, products } = useContext(ProductsContext) || {};

  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-136px)]">
      {index !== undefined && (
        <div className="flex">
          <img
            className="w-1/2 h-auto rounded"
            src={products[index].image}
            alt="#"
          />
          <div className="ml-8">
            <h1 className="text-3xl font-bold mb-4">{products[index].title}</h1>
            <p className="text-gray-600">{products[index].description}</p>
            <p className="text-2xl font-bold mt-4">${products[index].price}</p>
            <button className="bg-primary1 text-white px-4 py-2 mt-4 rounded hover:bg-primary2">
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
