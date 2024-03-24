import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/ProductsContext";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const CartPage: React.FC = () => {
  const { products } = useContext(ProductsContext) || {};
  const { cartItems, setCartItems } = useContext(CartContext) || {};
  const [cartProducts, setCartProducts] = useState<any[]>([]);
  const [windowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    if (!cartItems || !products) return;

    const newCartProducts = products.filter((product: any) =>
      cartItems.includes(product.customId)
    );

    setCartProducts(newCartProducts);
  }, [products, cartItems]);

  const calculateTotal = () => {
    return cartProducts.reduce(
      (total: any, product: any) =>
        total +
        Math.trunc((product.price / 100) * 70) * (product.quantity || 1),
      0
    );
  };

  const increaseQuantity = (customId: number) => {
    const updatedCartProducts = cartProducts.map((product: any) => {
      if (product.customId === customId) {
        return { ...product, quantity: (product.quantity || 1) + 1 };
      }
      return product;
    });

    setCartProducts(updatedCartProducts);
  };

  const decreaseQuantity = (customId: number) => {
    const updatedCartProducts = cartProducts.map((product: any) => {
      if (
        product.customId === customId &&
        product.quantity &&
        product.quantity > 1
      ) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });

    setCartProducts(updatedCartProducts);
  };

  const removeItem = (customId: number) => {
    const updatedCartProducts = cartProducts.filter(
      (product: any) => product.customId !== customId
    );
    setCartProducts(updatedCartProducts);

    if (setCartItems) {
      setCartItems(updatedCartProducts.map((product) => product.customId));
    }
  };

  return (
    <div className="p-4 md:px-16 md:py-8 min-h-[calc(100vh-152px)] ">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartProducts.length === 0 ? (
        <p className="text-deepWhite">Your cart is empty.</p>
      ) : (
        <>
          <ul className="flex flex-col bg-[#202020] bg-primary p-4 md:p-8 rounded gap-2 border-gray5 border">
            {cartProducts.map((product: any, index: number) => (
              <React.Fragment key={product.customId}>
                <li className="flex items-center justify-between py-2">
                  <div className="flex items-start flex-col sm:flex-row sm:space-x-4">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] rounded"
                    />
                    <div className="mt-2">
                      <p
                        className={`text-lg text-primary ${
                          windowWidth < 600 ? "max-w-[300px]" : "max-w-[300px]"
                        }`}
                      >
                        {product.title.length > (windowWidth < 600 ? 30 : 60)
                          ? product.title.substring(
                              0,
                              windowWidth < 600 ? 30 : 60
                            ) + "..."
                          : product.title}
                      </p>
                      <p className="text-md font-semibold text-primary">
                        ${Math.trunc((product.price / 100) * 70)}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center justify-center space-x-4 sm:space-x-4 bg-gray9 border-gray5 text-white border-[1px] px-4 py-2 rounded text-[10px] sm:text-small md:text-medium">
                        <button
                          onClick={() => decreaseQuantity(product.customId)}
                        >
                          <FaMinus size={14} />
                        </button>
                        <span className="text-lg text-center w-[15px]">
                          {product.quantity || 1}
                        </span>
                        <button
                          onClick={() => increaseQuantity(product.customId)}
                        >
                          <FaPlus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(product.customId)}
                        className="bg-gray9 border-gray5 hover:bg-gray8 hover:border-gray5 text-white border-[1px] p-2 rounded text-md"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
                {index < cartProducts.length - 1 && (
                  <div className="w-full h-px bg-gray-300 my-2" />
                )}
              </React.Fragment>
            ))}
          </ul>

          <div className="mt-8">
            <p className="text-xl font-semibold">
              Subtotal: ${Math.trunc(calculateTotal())}
            </p>
            <button className="bg-gray9 border-gray5 hover:bg-gray8 hover:border-gray5 text-white border-[1px] text-primary px-4 py-2 rounded mt-4">
              <a href="https://www.fhoas.dev/">Proceed to Checkout</a>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
