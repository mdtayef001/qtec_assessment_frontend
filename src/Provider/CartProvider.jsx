import { useState } from "react";
import CartContext from "../Context/CartContext";
import toast from "react-hot-toast";

const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItem, setCartItem] = useState([]);

  const AddToCart = (itemID) => {
    setCartCount(cartCount + 1);
    setCartItem((prevItem) => {
      const existingItem = prevItem.find((item) => item.itemID === itemID);
      if (existingItem) {
        toast.success("Updated The Cart");
        return prevItem.map((item) =>
          item.itemID === itemID
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.success("Added to Cart");
        return [...prevItem, { itemID, quantity: 1 }];
      }
    });
  };
  console.log(cartItem);

  const value = {
    cartCount,
    setCartCount,
    AddToCart,
    cartItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
