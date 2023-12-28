import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import { CartContext } from "../../context/CartContext";

interface ProductsProps {
  product: any;
  id: number;
}

const Products: React.FC<ProductsProps> = ({ product, id }) => {
  const { setIndex, index } = useContext(ProductsContext) || {};
  const { cartItems, setCartItems } = useContext(CartContext) || {};

  const navigate = useNavigate();

  const handleClick = () => {
    if (setIndex) {
      setIndex(id);
      navigate(`details/${index}`);
    }
  };

  const addCart = () => {
    if (setCartItems) {
      const newCartItems = cartItems ? [...cartItems] : [];

      if (!newCartItems.includes(id)) {
        newCartItems.push(id);
        setCartItems(newCartItems);
        console.log(cartItems);
      }
    }
  };

  return (
    <div className="flex justify-between items-center flex-col bg-primaryWhite text-primaryBlack h-fit min-h-[350px] p-6 rounded cursor-pointer">
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
          className="py-2 px-8 rounded text-primaryWhite bg-primaryBlack mt-4"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Products;
