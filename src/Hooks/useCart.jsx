import { useContext } from "react";
import CartContext from "../Context/CartContext";

const useCart = () => {
  const Context = useContext(CartContext);
  return Context;
};

export default useCart;
