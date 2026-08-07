"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Filter, Eye, CheckCircle2, XCircle, ShoppingCart, Check } from "lucide-react";
import { Button } from "@heroui/react";
import tilesData from "@/data/tiles.json";
import { useCart } from "@/context/CartContext";

const categories = [
  { label: "All Tiles", value: "all" },
  { label: "Floor Tiles", value: "floor-tiles" },
  { label: "Wall Tiles", value: "wall-tiles" },
  { label: "Porcelain Tiles", value: "porcelain-tiles" },
  { label: "Outdoor Garden", value: "outdoor-garden-tiles" },
  { label: "Marble Finish", value: "marble-finish-tiles" },
];


export default function AllTilesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [addedId, setAddedId] = useState(null); // ⚡ Click feedback state
  const { addToCart } = useCart();
  

  //  Interactive Handler
  const handleAddToCart = (tile) => {
    addToCart(tile, 1);
    setAddedId(tile.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1200);
  };

  // Filter Logic
  const filteredTiles = useMemo(() => {
    return tilesData.filter((tile) => {
      const matchesSearch =
        tile.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tile.material.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || tile.category === selectedCategory;

      const matchesStock = onlyInStock ? tile.inStock === true : true;

      return matchesSearch && matchesCategory && matchesStock;
    });
  }, [searchTerm, selectedCategory, onlyInStock]);

  return (
    <div className="min-h-screen bg-neutral-50/50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-green-800 uppercase">
            Our Exclusive Catalog
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight">
            Explore All Tiles
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base">
            Browse through our luxury collection of ceramic, porcelain, outdoor, and marble finish tiles tailored for modern spaces.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-6 shadow-sm space-y-4">
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="w-5 h-5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by name or material..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-800/30 focus:border-green-800 transition-all"
              />
            </div>

            {/* Stock Filter */}
            <label className="flex items-center gap-2.5 cursor-pointer select-none self-start lg:self-center">
              <input
                type="checkbox"
                checked={onlyInStock}
                onChange={(e) => setOnlyInStock(e.target.checked)}
                className="w-4 h-4 rounded border-neutral-300 text-green-800 focus:ring-green-800 accent-green-800 cursor-pointer"
              />
              <span className="text-sm font-semibold text-neutral-700">
                In Stock Only
              </span>
            </label>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-neutral-100">
            <span className="text-xs font-bold uppercase text-neutral-400 shrink-0 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Categories:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.value
                    ? "bg-green-800 text-white shadow-md shadow-green-800/20"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-neutral-500 font-medium px-1">
          <span>Showing <strong className="text-neutral-900">{filteredTiles.length}</strong> Products</span>
          {(searchTerm || selectedCategory !== "all" || onlyInStock) && (
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setOnlyInStock(false);
              }}
              className="text-amber-600 hover:underline text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredTiles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTiles.map((tile) => {
              const isAdded = addedId === tile.id;

              return (
                <div
                  key={tile.id}
                  className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-60 w-full overflow-hidden bg-neutral-100">
                      <Image
                        src={tile.image}
                        alt={tile.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Stock Status */}
                      <div className="absolute top-3 left-3">
                        {tile.inStock ? (
                          <span className="inline-flex items-center gap-1 bg-emerald-800/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                            <CheckCircle2 className="w-3 h-3" /> In Stock
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 bg-rose-700/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                            <XCircle className="w-3 h-3" /> Out of Stock
                          </span>
                        )}
                      </div>

                      <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded-md">
                        {tile.dimensions}
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-amber-600">
                        {tile.material}
                      </span>
                      <h3 className="text-base font-bold text-neutral-900 group-hover:text-green-800 transition-colors line-clamp-1">
                        {tile.title}
                      </h3>
                      <p className="text-xs text-neutral-500 line-clamp-2">
                        {tile.description}
                      </p>
                    </div>
                  </div>

                  {/* Price & Action Buttons */}
                  <div className="p-5 pt-0 space-y-3 mt-4">
                    <div className="flex items-center justify-between border-t border-neutral-100 pt-3">
                      <div>
                        <span className="text-xs text-neutral-400 block font-medium">Price</span>
                        <span className="text-lg font-black text-neutral-900">
                          ${tile.price.toFixed(2)}
                        </span>
                      </div>

                      <Link href={`/all-tiles/${tile.id}`}>
                        <Button
                          size="sm"
                          radius="full"
                          endContent={<Eye className="w-4 h-4" />}
                          className="bg-yellow-600 text-white hover:bg-green-800 font-semibold px-3 cursor-pointer"
                        >
                          Details view
                        </Button>
                      </Link>
                    </div>

                    {/* Interactive Add to Cart Button */}
                    <Button
                      size="sm"
                      radius="full"
                      fullWidth
                      isDisabled={!tile.inStock}
                      onClick={() => handleAddToCart(tile)}
                      startContent={
                        isAdded ? (
                          <Check className="w-4 h-4 text-emerald-300 animate-bounce" />
                        ) : (
                          <ShoppingCart className="w-4 h-4" />
                        )
                      }
                      className={`font-bold transition-all transform active:scale-95 cursor-pointer ${
                        !tile.inStock
                          ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                          : isAdded
                          ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20"
                          : "bg-green-800 text-white hover:bg-green-900 shadow-md shadow-green-800/20"
                      }`}
                    >
                      {!tile.inStock ? "Out of Stock" : isAdded ? "Added!" : "Add to Cart"}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-neutral-200 space-y-3">
            <p className="text-lg font-bold text-neutral-800">No tiles found!</p>
            <p className="text-xs text-neutral-500">Try adjusting your search terms or filter selections.</p>
          </div>
        )}

      </div>
    </div>
  );
}