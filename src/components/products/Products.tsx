// Products.tsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import { CartContext } from "../../context/CartContext";

interface ProductsProps {
  product: any;
  id: number;
}

const Products: React.FC<ProductsProps> = ({ product, id }) => {
  const { setIndex } = useContext(ProductsContext) || {};
  const { cartItems, setCartItems } = useContext(CartContext) || {};
  const navigate = useNavigate();

  const handleClick = () => {
    if (setIndex) {
      setIndex(id);
      navigate(`details/${id}`);
    }
  };
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
    <div className="flex justify-between items-center flex-col bg-[#FFFFFF] text-primary h-fit min-h-[350px] p-6 rounded cursor-pointer">
      <div
        onClick={handleClick}
        className="flex justify-center items-center flex-col gap-2"
      >
        <div>
          <img
            className="w-[150px] aspect-square"
            src={product.image}
            alt="#"
          />
        </div>
        <div className="flex items-center justify-center text-center h-[75px] overflow-scroll">
          {product.title}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center font-bold">
          {product.price} $
        </div>
        <button
          onClick={addCart}
          className="py-2 px-8 rounded text-primary bg-primary mt-4"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Products;
