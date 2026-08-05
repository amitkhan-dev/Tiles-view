"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  // ১. Mount হওয়ার পর localStorage থেকে ডাটা রিড করা
  useEffect(() => {
    setIsMounted(true);
    try {
      const savedCart = localStorage.getItem("tiles_cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem("tiles_cart", JSON.stringify(cart));
      } catch (error) {
        console.error("Failed to save cart to localStorage:", error);
      }
    }
  }, [cart, isMounted]);



  const addToCart = (product, quantity = 1) => {
    const productName = product.title || product.name || "Item";

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => String(item.id) === String(product.id)
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });

    toast.success(`${productName} added to cart! 🛍️`);
  };

  // 🗑️ Remove Item (Fixed Async Bug)
  const removeFromCart = (id) => {
    // setCart এর বাইরে আগে প্রোডাক্টটি খুঁজে বের করা
    const target = cart.find((item) => String(item.id) === String(id));
    const removedTitle = target?.title || target?.name || "Item";

    setCart((prevCart) => prevCart.filter((item) => String(item.id) !== String(id)));

    toast.error(`${removedTitle} removed from cart`);
  };

  // 🔢 Update Quantity
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
    toast.error("Cart cleared!");
  };

  // 📊 Calculated values
  const totalItems = isMounted
    ? cart.reduce((total, item) => total + (item.quantity || 0), 0)
    : 0;

  const totalPrice = isMounted
    ? Number(
        cart
          .reduce(
            (total, item) =>
              total + (Number(item.price) || 0) * (item.quantity || 1),
            0
          )
          .toFixed(2)
      )
    : 0;

  return (
    <CartContext.Provider
      value={{
        cart: isMounted ? cart : [],
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isMounted,
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