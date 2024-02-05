import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/CartContext";

interface ProductsProps {
  product: any;
  id: number;
}

const DetailsPage: React.FC<ProductsProps> = () => {
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
            className="w-[200px] h-[200px] md:h-[300px] md:w-[300px] rounded"
            src={products[index].image}
            alt="#"
          />
          <div className="md:ml-8">
            <h1 className="text-3xl font-bold mb-4 text-white">
              {products[index].title}
            </h1>
            <p className="text-deepWhite">{products[index].description}</p>
            <div className="flex items-center mt-4 gap-2">
              <span className="line-through text-deepWhite">
                {products[index].price}$
              </span>
              <p className="text-2xl font-bold">
                ${Math.trunc((products[index].price / 100) * 70)}
              </p>
            </div>
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
