"use client"; // For Next.js Client Component

import { useCart } from "@/context/CartContext"; // Import the cart context

const Cart = () => {
  const { cartItems, removeFromCart } = useCart(); // Get cart items and remove function

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
        Your Cart
      </h2>

      {cartItems.length > 0 ? (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
                </div>
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removeFromCart(item.id)} // Remove product from cart
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
