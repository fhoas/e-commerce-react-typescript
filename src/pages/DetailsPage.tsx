import React, { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../context/CartContext";

interface ProductsProps {
  product: any;
  id: number;
}

const DetailsPage: React.FC<ProductsProps> = () => {
  const { index, products } = useContext(ProductsContext) || {};
  const { cartItems, setCartItems } = useContext(CartContext) || {};
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const addCart = () => {
    if (setCartItems && index !== undefined && cartItems !== undefined) {
      const numericId = Number(products[index]?.customId);

      if (!isNaN(numericId)) {
        if (cartItems.includes(numericId)) {
          const updatedCartItems = cartItems.filter(
            (itemId) => itemId !== numericId
          );
          setCartItems(updatedCartItems);
        } else {
          const newCartItems = [...cartItems, numericId];
          setCartItems(newCartItems);
        }
      }
    }
  };

  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-170px)] sm:min-h-[calc(100vh-136px)]">
      {index !== undefined && (
        <div className="flex flex-col justify-start items-start gap-4 md:items-start md:flex-row">
          <div className="relative">
            <div className="w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] overflow-hidden ">
              <img
                className="w-full h-full object-cover rounded-[5px]"
                src={products[index]?.images[currentImageIndex]}
                alt="Selected Image"
              />
            </div>
            <div className="flex gap-2 mt-4">
              {products[index]?.images.map((image: string, i: number) => (
                <img
                  key={i}
                  className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] cursor-pointer rounded-[5px]"
                  src={image}
                  alt={`Image ${i}`}
                  onClick={() => setCurrentImageIndex(i)}
                />
              ))}
            </div>
          </div>
          <div className="md:ml-8">
            <h1 className="text-3xl font-bold mb-4 text-white">
              {products[index]?.title}
            </h1>
            <p className="text-deepWhite h-fit">
              {products[index]?.description}
            </p>
            <div className="flex items-center mt-4 gap-2">
              <span className="line-through text-deepWhite">
                {products[index]?.price}$
              </span>
              <p className="text-2xl font-bold">
                ${Math.trunc((products[index]?.price / 100) * 70)}
              </p>
            </div>
            <button
              className={`flex justify-center items-center gap-2 bg-gray9 border-gray6 hover:bg-gray8 hover:border-gray5 border-[1px] text-primary px-4 py-2 mt-4 rounded hover:bg-primary ${
                cartItems && cartItems.includes(products[index]?.customId)
                  ? "bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600"
                  : ""
              }`}
              onClick={addCart}
            >
              <FaCartShopping />
              {cartItems && cartItems.includes(products[index]?.customId)
                ? "Added to Cart"
                : "Add to Cart"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
