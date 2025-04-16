"use client"; // Since you're using Next.js 13+ with React Client Components

import { createContext, useContext, useState, useEffect } from "react";

// Create CartContext to share the cart state across the app
const CartContext = createContext();

// CartProvider to wrap the app and provide cart data
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Retrieve cartItems from localStorage if they exist (for persistence between sessions)
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems)); // Parse and set the items from localStorage
    }
  }, []);

  // Sync cartItems with localStorage whenever they change
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Save to localStorage
    }
  }, [cartItems]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Increment quantity if product exists
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }]; // Add new product if not found
    });
  };

  // Function to remove a product from the cart
  const removeFromCart = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id)); // Remove item by ID
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCartItems([]); // Clear cart
    localStorage.removeItem("cartItems"); // Remove from localStorage
  };

  // Function to update quantity of an item in the cart
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item // Ensure minimum quantity is 1
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use CartContext easily
export const useCart = () => useContext(CartContext);
