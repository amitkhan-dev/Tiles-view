"use client";

import { CartProvider } from "@/context/CartContext";
import { HeroUIProvider } from "@heroui/system";


export function Providers({ children }) {
  return (
    <HeroUIProvider>
      <CartProvider>
      {children}
      </CartProvider>
    </HeroUIProvider>
  );
}