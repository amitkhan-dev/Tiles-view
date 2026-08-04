"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, CheckCircle2,XCircle, ShoppingCart, ShieldCheck,Truck, 
  RotateCcw,Plus,Minus,Eye } from "lucide-react";
import { Button } from "@heroui/react";
import tilesData from "@/data/tiles.json";

export default function SingleProductPage() {
  const params = useParams();
  const tileId = params?.id;

  const [quantity, setQuantity] = useState(1);

  //  Find the current tile
  const tile = useMemo(() => {
    return tilesData.find((item) => item.id === tileId);
  }, [tileId]);

  //  Related Products
  const relatedTiles = useMemo(() => {
    if (!tile) return [];
    return tilesData
      .filter((item) => item.category === tile.category && item.id !== tile.id)
      .slice(0, 4);
  }, [tile]);

  //  product not found
  if (!tile) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-black text-neutral-900">
          Product Not Found!
        </h2>
        <p className="text-neutral-500 text-sm">
          The tile product you are looking for does not exist or has been removed.
        </p>
        <Link href="/all-tiles">
          <Button
            size="md"
            radius="full"
            startContent={<ArrowLeft className="w-4 h-4" />}
            className="bg-green-800 text-white hover:bg-green-900 font-semibold cursor-pointer"
          >
            Back to All Tiles
          </Button>
        </Link>
      </div>
    );
  }

  const incrementQty = () => setQuantity((prev) => prev + 1);
  const decrementQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-neutral-50/50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back Link */}
        <div>
          <Link
            href="/all-tiles"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-600 hover:text-green-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Collection
          </Link>
        </div>

        {/* Product Details Section */}
        <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Product Image */}
          <div className="space-y-4">
            <div className="relative h-[350px] sm:h-[480px] w-full rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200">
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              
              {/* Stock Tag */}
              <div className="absolute top-4 left-4">
                {tile.inStock ? (
                  <span className="inline-flex items-center gap-1 bg-emerald-800/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    <CheckCircle2 className="w-3.5 h-3.5" /> In Stock
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 bg-rose-700/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    <XCircle className="w-3.5 h-3.5" /> Out of Stock
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right: Product  */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  {tile.category.replace("-", " ")}
                </span>
                <span className="text-xs font-semibold text-neutral-400">
                  ID: {tile.id}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
                {tile.title}
              </h1>

          
              <div className="flex items-baseline gap-2 pt-2">
                <span className="text-3xl sm:text-4xl font-black text-green-800">
                  ${tile.price.toFixed(2)}
                </span>
                <span className="text-xs text-neutral-400 font-medium">/ sq.ft ({tile.currency})</span>
              </div>

              <p className="text-neutral-600 text-sm leading-relaxed pt-2">
                {tile.description}
              </p>

              <div className="pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                  Key Specifications
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200/80">
                    <span className="text-neutral-400 block font-medium">Material</span>
                    <span className="font-bold text-neutral-800">{tile.material}</span>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200/80">
                    <span className="text-neutral-400 block font-medium">Dimensions</span>
                    <span className="font-bold text-neutral-800">{tile.dimensions}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quantity & Cart Action */}
            <div className="space-y-4 pt-6 border-t border-neutral-100">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                
                <div className="flex items-center justify-between border border-neutral-200 rounded-full p-1.5 bg-neutral-50 w-full sm:w-36">
                  <button
                    onClick={decrementQty}
                    className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bold text-neutral-900 text-sm px-2">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQty}
                    className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <Button
                  size="lg"
                  radius="full"
                  disabled={!tile.inStock}
                  startContent={<ShoppingCart className="w-5 h-5" />}
                  className={`flex-1 font-bold transition-all cursor-pointer ${
                    tile.inStock
                      ? "bg-green-800 text-white hover:bg-green-900 shadow-lg shadow-green-800/20"
                      : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                  }`}
                >
                  {tile.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-2 pt-4 text-center text-[11px] text-neutral-500 border-t border-neutral-100">
                <div className="flex flex-col items-center gap-1">
                  <Truck className="w-4 h-4 text-green-800" />
                  <span>Fast Delivery</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-green-800" />
                  <span>Quality Assured</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <RotateCcw className="w-4 h-4 text-green-800" />
                  <span>Easy Return</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Related Products Section */}
        {relatedTiles.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
                  Similar Choices
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
                  Related Products
                </h3>
              </div>
              <Link
                href={`/all-tiles?category=${tile.category}`}
                className="text-xs sm:text-sm font-bold text-green-800 hover:underline"
              >
                View Category
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedTiles.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 space-y-1">
                      <span className="text-[10px] uppercase font-bold text-amber-600">
                        {item.material}
                      </span>
                      <h4 className="text-sm font-bold text-neutral-900 line-clamp-1 group-hover:text-green-800 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  <div className="p-4 pt-0 flex items-center justify-between border-t border-neutral-100 mt-3">
                    <span className="text-base font-black text-neutral-900">
                      ${item.price.toFixed(2)}
                    </span>
                    <Link href={`/all-tiles/${item.id}`}>
                      <Button
                        size="sm"
                        radius="full"
                        endContent={<Eye className="w-3.5 h-3.5" />}
                        className="bg-green-800 text-white hover:bg-green-900 font-semibold px-3 text-xs cursor-pointer"
                      >
                        Details
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}