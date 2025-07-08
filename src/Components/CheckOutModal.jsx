import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import useCart from "../Hooks/useCart";
import toast from "react-hot-toast";
import { CheckCircle, FastForward, X } from "lucide-react";

const CheckOutModal = ({ isOpen, close, setIsSlider }) => {
  const [orderComplete, setOrderComplete] = useState(false);

  const { cartItem, cartTotal, setCartItem, setCartCount } = useCart();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setOrderComplete(true);

    toast.success("Order placed successfully!");
    setTimeout(() => {
      setOrderComplete(false);
      setCartItem([]);
      setCartCount(0);
      close();
      setIsSlider(false);
    }, 3000);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-100 focus:outline-non"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
                <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                  {orderComplete ? (
                    <div className="p-8 text-center">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Order Placed!
                      </h2>
                      <p className="text-gray-600 mb-4">
                        Thank you for your purchase. Your order has been
                        confirmed.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-700">
                          Order Total:{" "}
                          <span className="font-bold text-primary">
                            {cartTotal}
                          </span>
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center justify-between p-6 border-b border-gray-300">
                        <h2 className="text-xl font-bold">Checkout</h2>

                        <Button className="cursor-pointer" onClick={close}>
                          <X className="h-5 w-5" />
                        </Button>
                      </div>

                      {/* Order Summary */}
                      <div className="p-6 border-b border-gray-300 bg-gray-50">
                        <h3 className="font-semibold mb-3">Order Summary</h3>
                        <div className="space-y-2 max-h-32 overflow-y-auto">
                          {cartItem.map((item) => (
                            <div
                              key={item.id}
                              className="flex justify-between text-sm"
                            >
                              <span>
                                {item.title} × {item.quantity}
                              </span>
                              <span>
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between font-bold text-lg mt-3 pt-3 border-t  border-gray-300">
                          <span>Total:</span>
                          <span className="text-primary">
                            ${cartTotal.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        <div>
                          <p htmlFor="name">Full Name *</p>
                          <input
                            required
                            placeholder="Enter your full name"
                            className="mt-1 w-full rounded-lg p-4 border border-gray-200"
                          />
                        </div>

                        <div>
                          <p htmlFor="email">Email Address *</p>
                          <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="mt-1 w-full rounded-lg p-4 border border-gray-200"
                          />
                        </div>

                        <div>
                          <p htmlFor="address">Shipping Address *</p>
                          <input
                            type="text"
                            required
                            placeholder="Enter your address"
                            className="mt-1 w-full rounded-lg p-4 border border-gray-200"
                          />
                        </div>

                        <button className="w-full bg-black hover:bg-black/90 text-white py-4 rounded-lg cursor-pointer">
                          Place Order - $${cartTotal}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default CheckOutModal;
