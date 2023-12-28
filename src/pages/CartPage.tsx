import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/ProductsContext";

const CartPage: React.FC = () => {
  const { products } = useContext(ProductsContext) || {};
  const { cartItems } = useContext(CartContext) || {};
  const [cartProducts, setCartProducts] = useState<any[]>([]);

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
      (total: any, product: any) => total + product.price * product.quantity,
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
  };

  return (
    <div className="p-8 min-h-[calc(100vh-136px)]">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-300">
            {cartProducts.map((product: any) => (
              <li
                key={product.id}
                className="flex items-center justify-between py-2"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold">{product.title}</p>
                    <p className="text-gray-500">${product.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => decreaseQuantity(product.id)}
                    className="text-gray-500"
                  >
                    -
                  </button>
                  <span>{product.quantity || 1}</span>
                  <button
                    onClick={() => increaseQuantity(product.id)}
                    className="text-gray-500"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="text-xl font-semibold">
              Subtotal: ${Math.trunc(calculateTotal())}
            </p>
            <button className="bg-primaryWhite text-primaryBlack px-4 py-2 rounded mt-4">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
