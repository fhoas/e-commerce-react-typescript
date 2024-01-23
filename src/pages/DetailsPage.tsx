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
    if (setCartItems) {
      const newCartItems = cartItems ? [...cartItems] : [];

      const numericId = Number(id);

      if (!isNaN(numericId) && !newCartItems.includes(numericId)) {
        newCartItems.push(numericId);
        setCartItems(newCartItems);
        console.log(newCartItems);
      }
    }
  };

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
            <p className="text-[#edede9]">{products[index].description}</p>
            <p className="text-2xl font-bold mt-4">${products[index].price}</p>
            <button
              className="bg-primary text-primary px-4 py-2 mt-4 rounded hover:bg-primary"
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
