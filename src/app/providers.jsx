"use client";

import { CartProvider } from "@/context/CartContext";
import { HeroUIProvider } from "@heroui/system";
import { Toaster } from "react-hot-toast";

export function Providers({ children }) {
  return (
    <HeroUIProvider>
      <CartProvider>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#18181b",
              color: "#fff",
              borderRadius: "12px",
              padding: "12px 16px",
            },
          }}
        />
      </CartProvider>
    </HeroUIProvider>
  );
}