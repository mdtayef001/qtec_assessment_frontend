import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCart = ({ item }) => {
  const cart = [];
  const handleAddToCart = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();
    cart.push(productId);
    // Logic to add the product to the cart
    console.log(`Product with ID ${productId} added to cart`, cart);
  };

  return (
    <>
      <Link
        to={`product/${item?._id}`}
        className=" shadow-lg group hover:scale-105 transition-all ease-in-out duration-200 rounded-lg"
      >
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <img
            className="w-full h-full group-hover:scale-110 transition-all ease-in-out duration-200"
            src={item?.image}
            alt=""
          />
        </div>
        <div className="p-4">
          <p className="font-semibold text-lg mb-2">{item?.title}</p>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {item?.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              ${item?.price}
            </span>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {item?.category}
            </span>
          </div>
          <button
            onClick={(e) => handleAddToCart(e, item?._id)}
            className="w-full bg-black hover:bg-black/90 text-white transition-colors p-2 mt-3 flex justify-center items-center gap-2 rounded-lg cursor-pointer"
          >
            <span>
              <Plus />
            </span>
            Add to cart
          </button>
        </div>
      </Link>
    </>
  );
};

export default ProductCart;
