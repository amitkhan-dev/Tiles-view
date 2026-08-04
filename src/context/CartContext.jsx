"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. Initial Load: Read from LocalStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("tiles_cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // 2. Save Changes: Update LocalStorage on cart change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("tiles_cart", JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  // 🛒 Add to Cart Function
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      // 🛠️ Fix 3: String conversion to handle both string and numeric IDs
      const existingIndex = prevCart.findIndex(
        (item) => String(item.id) === String(product.id)
      );

      if (existingIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // 🗑️ Remove Item
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => String(item.id) !== String(id))
    );
  };

  // 🔢 Update Quantity Directly
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        String(item.id) === String(id) ? { ...item, quantity } : item
      )
    );
  };

  // 🧹 Clear Entire Cart
  const clearCart = () => {
    setCart([]);
  };

  // 📊 Total Item Count calculation
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // 💰 Total Price calculation (Fixed decimal precision)
  const totalPrice = Number(
    cart.reduce((total, item) => total + (Number(item.price) || 0) * item.quantity, 0).toFixed(2)
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};