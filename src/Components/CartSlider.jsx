import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import useCart from "../Hooks/useCart";

const CartSlider = ({ isOpen, setIsSlider }) => {
  const { cartItem } = useCart();
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-50 transition-opacity"
          onClick={() => setIsSlider(false)}
        />
      )}

      <div
        className={`fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold">Shopping Cart</h2>
              {cartItem.length > 0 && <span>{cartItem.length}</span>}
            </div>
            <button onClick={() => setIsSlider(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItem.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-lg text-gray-500 mb-2">Your cart is empty</p>
                <p className="text-sm text-gray-400">
                  Add some products to get started!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItem.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        // onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        // onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <button
                      //   onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cartItem.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex items-center justify-between text-xl font-bold">
                <span>Total:</span>
                {/* <span className="text-primary">${cartTotal.toFixed(2)}</span> */}
                <span className="text-primary">$200</span>
              </div>
              <button
                // onClick={handleCheckout}
                className="w-full bg-black hover:bg-black/90 text-white py-4 rounded-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSlider;
