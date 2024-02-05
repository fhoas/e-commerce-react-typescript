import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/CartContext";

interface ProductsProps {
  product: any;
  id: number;
}

const DetailsPage: React.FC<ProductsProps> = () => {
  const { id } = useParams();
  const { index, products } = useContext(ProductsContext) || {};
  const { cartItems, setCartItems } = useContext(CartContext) || {};

  const addCart = () => {
    if (setCartItems && index !== undefined) {
      const newCartItems = cartItems ? [...cartItems] : [];

      const numericId = Number(products[index].id);

      if (!isNaN(numericId) && !newCartItems.includes(numericId)) {
        newCartItems.push(numericId);
        setCartItems(newCartItems);
      }
    }
  };

  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-136px)]">
      {index !== undefined && (
        <div className="flex flex-col justify-center items-start gap-4 md:items-start md:flex-row">
          <img
            className="w-[200px] h-[200px] md:h-[400px] md:w-1/2 rounded"
            src={products[index].image}
            alt="#"
          />
          <div className="md:ml-8">
            <h1 className="text-3xl font-bold mb-4 text-white">
              {products[index].title}
            </h1>
            <p className="text-deepWhite">{products[index].description}</p>
            <p className="text-white text-2xl font-bold mt-4">
              ${Math.trunc((products[index].price / 100) * 70)}
            </p>
            <button
              className="bg-deepPurple1 text-primary px-4 py-2 mt-4 rounded hover:bg-primary"
              onClick={addCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
