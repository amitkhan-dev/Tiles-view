"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Button } from "@heroui/react";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4 px-4 text-center">
        <div className="p-6 bg-neutral-100 rounded-full text-neutral-400">
          <ShoppingBag className="w-16 h-16" />
        </div>
        <h2 className="text-2xl font-bold text-neutral-800">Your Cart is Empty!</h2>
        <p className="text-neutral-500 max-w-md text-sm">
          Looks like you haven't added any tiles to your cart yet. Explore our catalog and add your favorites!
        </p>
        <Link href="/all-tiles">
          <Button color="primary" radius="full" size="lg" className="font-semibold px-8 mt-2">
            Browse All Tiles
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      <div className="flex items-center justify-between border-b border-neutral-200 pb-5">
        <div>
          <h1 className="text-2xl sm:text-4xl font-black text-neutral-900">Shopping Cart</h1>
          <p className="text-neutral-500 text-sm mt-1">Manage items in your cart before checkout</p>
        </div>
        <Button
          color="danger"
          variant="light"
          size="sm"
          onClick={clearCart}
          className="font-bold text-xs"
        >
          Clear Cart
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => {
            const itemId = item.id || item._id;
            return (
              <div
                key={itemId}
                className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white border border-neutral-200 rounded-2xl gap-4 shadow-sm"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-neutral-100 shrink-0 border border-neutral-100">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title || "Tile"}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 text-base line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-500">{item.material}</p>
                    <p className="text-sm font-bold text-green-800 mt-1">
                      ${item.price?.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Quantity & Delete btn*/}
                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-neutral-100">
                  <div className="flex items-center border border-neutral-200 rounded-full bg-neutral-50 p-1">
                    <button
                      onClick={() => updateQuantity(itemId, item.quantity - 1)}
                      className="p-1 hover:bg-white rounded-full transition-colors text-neutral-600"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-3 font-bold text-sm text-neutral-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(itemId, item.quantity + 1)}
                      className="p-1 hover:bg-white rounded-full transition-colors text-neutral-600"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-right min-w-17.5">
                    <span className="text-base font-black text-neutral-900 block">
                      ${((item.price || 0) * item.quantity).toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => removeFromCart(itemId)}
                    className="p-2 text-rose-500 hover:bg-rose-50 rounded-full transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Summary Card */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm h-fit space-y-6">
          <h2 className="text-lg font-bold text-neutral-900 border-b border-neutral-100 pb-3">
            Order Summary
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-neutral-600">
              <span>Subtotal</span>
              <span className="font-semibold text-neutral-900">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-neutral-600">
              <span>Estimated Shipping</span>
              <span className="text-emerald-600 font-semibold">Free</span>
            </div>
            <div className="border-t border-neutral-100 pt-3 flex justify-between text-base font-bold text-neutral-900">
              <span>Total</span>
              <span className="text-green-800 text-xl font-black">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <Button
            color="primary"
            radius="full"
            size="lg"
            fullWidth
            className="font-bold shadow-lg shadow-green-800/20"
          >
            Proceed to Checkout
          </Button>

          <Link
            href="/all-tiles"
            className="flex items-center justify-center gap-2 text-xs font-bold text-neutral-500 hover:text-neutral-800 transition-colors pt-2"
          >
            <ArrowLeft className="w-4 h-4" /> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}