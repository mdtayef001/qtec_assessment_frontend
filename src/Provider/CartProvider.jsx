import { useState } from "react";
import CartContext from "../Context/CartContext";
import toast from "react-hot-toast";
import { products } from "../assets/products";

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const AddToCart = (product) => {
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

  const removeFromCart = (productId) => {
    setCartItem((prevItems) => {
      const item = prevItems.find((item) => item._id === productId);
      if (item) {
        toast.success("Removed From Cart");
      }
      return prevItems.filter((item) => item._id !== productId);
    });
  };

  const updateQuantity = (productId, quantity) => {
    console.log(productId, quantity);
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItem((prevItem) =>
      prevItem.map((item) =>
        item._id === productId ? { ...item, quantity } : item
      )
    );
  };

  const cartTotal = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = cartItem.reduce((count, item) => count + item.quantity, 0);

  const value = {
    cartCount,
    AddToCart,
    cartItem,
    products,
    cartTotal,
    setCartItem,
    removeFromCart,
    updateQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
