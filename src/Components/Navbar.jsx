import { HomeIcon, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSlider, setIsSlider] = useState(false);
  const [cartCount, setCartCount] = useState(1);

  return (
    <nav className="px-4 py-4 md:px-0 flex items-center justify-between md:py-5">
      {/* logo */}
      <Link to={"/"} className="hover:opacity-80 transition-opacity">
        <h1 className="flex items-center justify-center gap-2 text-xl font-bold">
          <HomeIcon />
          ShopEase
        </h1>
      </Link>
      {/* links */}
      <ul className="flex items-center gap-6 text-lg font-medium">
        <li className="hover:opacity-80 transition-opacity">
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <button
            onClick={() => setIsSlider(true)}
            className="flex items-center gap-2 relative text-md hover:opacity-80 hover:bg-gray-100 cursor-pointer transition-opacity border border-gray-300 p-1 rounded-lg"
          >
            <ShoppingCart />
            <span>cart</span>
            {cartCount > 0 && (
              <div className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-red-400 font-bold rounded-full text-white">
                {cartCount}
              </div>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
