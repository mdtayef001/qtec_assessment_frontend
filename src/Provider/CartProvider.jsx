import { useState } from "react";
import CartContext from "../Context/CartContext";
import toast from "react-hot-toast";
import { products } from "../assets/products";

const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItem, setCartItem] = useState([]);

  const AddToCart = (product) => {
    setCartCount(cartCount + 1);

    setCartItem((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === product._id);
      if (existingItem) {
        toast.success("Updated Cart");
        return prevItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.success("Added Cart");
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const cartTotal = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const value = {
    cartCount,
    setCartCount,
    AddToCart,
    cartItem,
    products,
    cartTotal,
    setCartItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
