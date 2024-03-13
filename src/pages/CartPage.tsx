import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/ProductsContext";

const CartPage: React.FC = () => {
  const { products } = useContext(ProductsContext) || {};
  const { cartItems, setCartItems } = useContext(CartContext) || {};
  const [cartProducts, setCartProducts] = useState<any[]>([]);
  // const [isUnsupportedDimensions, setIsUnsupportedDimensions] =
  //   useState<boolean>(false);
  const [windowWidth] = useState<number>(window.innerWidth);

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowWidth(window.innerWidth);
  //     setIsUnsupportedDimensions(window.innerWidth < 300);
  //   }

  //   handleResize();

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [cartItems]);

  useEffect(() => {
    setCartProducts((prevCartProducts) =>
      products
        .filter((product: any) => cartItems?.includes(product.id))
        .map((product: any) => {
          const existingProduct = prevCartProducts.find(
            (prevProduct) => prevProduct.id === product.id
          );
          return {
            ...product,
            quantity: existingProduct ? existingProduct.quantity : 1,
          };
        })
    );
  }, [products, cartItems]);

  const calculateTotal = () => {
    return cartProducts.reduce(
      (total: any, product: any) =>
        total + Math.trunc((product.price / 100) * 70) * product.quantity,
      0
    );
  };

  const increaseQuantity = (productId: number) => {
    const updatedCartProducts = cartProducts.map((product: any) => {
      if (product.id === productId) {
        return { ...product, quantity: (product.quantity || 1) + 1 };
      }
      return product;
    });

    setCartProducts(updatedCartProducts);
  };

  const decreaseQuantity = (productId: number) => {
    const updatedCartProducts = cartProducts.map((product: any) => {
      if (
        product.id === productId &&
        product.quantity &&
        product.quantity > 1
      ) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });

    setCartProducts(updatedCartProducts);
  };

  const removeItem = (productId: number) => {
    const updatedCartProducts = cartProducts.filter(
      (product: any) => product.id !== productId
    );
    setCartProducts(updatedCartProducts);

    if (setCartItems) {
      setCartItems(updatedCartProducts.map((product) => product.id));
    }
  };

  // if (isUnsupportedDimensions) {
  //   return (
  //     <div className="flex justify-center items-center p-8 text-center">
  //       <p className="text-red-500 mt-4">These dimensions are not supported.</p>
  //     </div>
  //   );
  // }

  return (
    <div className="p-4 md:px-16 md:py-8 min-h-[calc(100vh-152px)]">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartProducts.length === 0 ? (
        <p className="text-deepWhite">Your cart is empty.</p>
      ) : (
        <>
          <ul className="flex flex-col bg-[#202020] bg-primary p-4 md:p-8 rounded gap-2">
            {cartProducts.map((product: any, index: number) => (
              <React.Fragment key={product.id}>
                <li className="flex items-center justify-between py-2">
                  <div className="flex items-start space-x-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-[50px] h-[50px] sm:w-[75px] sm:h-[75px] rounded"
                    />
                    <div>
                      <p
                        className={`text-[10px] sm:text-small md:text-medium text-primary ${
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
                      <p className="text-[10px] sm:text-small md:text-medium font-semibold text-primary">
                        ${Math.trunc((product.price / 100) * 70)}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center justify-center space-x-4 sm:space-x-4">
                        <button
                          onClick={() => decreaseQuantity(product.id)}
                          className="text-white text-small sm:text-medium"
                        >
                          -
                        </button>
                        <span className="text-primary text-small sm:text-medium">
                          {product.quantity || 1}
                        </span>
                        <button
                          onClick={() => increaseQuantity(product.id)}
                          className="text-white text-small sm:text-medium"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="bg-gray9 border-gray5 hover:bg-gray8 hover:border-gray5 text-white border-[1px] p-2 rounded text-[10px] sm:text-small md:text-medium "
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
