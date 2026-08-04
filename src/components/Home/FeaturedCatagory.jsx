"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ArrowUpRightIcon } from "lucide-react";
import { Button } from "@heroui/react";

const categories = [
  {
    id: "floor-tiles",
    name: "Floor Tiles",
    description: "Durable & stylish ceramic tiles for everyday living.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=800&fit=crop",
    itemCount: "5 Products",
  },
  {
    id: "wall-tiles",
    name: "Wall Tiles",
    description: "Elegant wall finishes for kitchens and luxury bathrooms.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop",
    itemCount: "5 Products",
  },
  {
    id: "porcelain-tiles",
    name: "Porcelain Tiles",
    description: "Ultra-strong polished porcelain for high-traffic areas.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=800&fit=crop",
    itemCount: "5 Products",
  },
  {
    id: "outdoor-garden-tiles",
    name: "Outdoor & Garden",
    description: "Weather-resistant & anti-slip tiles for open terraces.",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&h=800&fit=crop",
    itemCount: "5 Products",
  },
  {
    id: "marble-finish-tiles",
    name: "Marble Finish",
    description: "Luxurious veined marble look at affordable pricing.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&h=800&fit=crop",
    itemCount: "5 Products",
  },
];

const FeaturedCatagory = () => {
  return (
    <section className="py-12 sm:py-16 bg-neutral-50/50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div>
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-green-800 uppercase">
            Explore Collections
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight mt-1">
            Shop By Category
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/all-tiles?category=${category.id}`}
              className="group relative h-[320px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-200 flex flex-col justify-end p-5"
            >
              {/* Background Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content Box */}
              <div className="relative z-10 space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-900/40 px-2 py-0.5 rounded-full border border-amber-500/30">
                  {category.itemCount}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                  {category.name}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-2 font-normal">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Right Explore Collection Button */}
        <div className="flex justify-end pt-4">
          <Link href="/all-tiles">
            <Button
              size="lg"
              radius="full"
              endContent={<ArrowRight className="w-5 h-5" />}
              className="font-semibold px-8 bg-green-800 text-white hover:bg-green-900 shadow-xl shadow-green-800/25 hover:scale-105 transition-all cursor-pointer"
            >
              View All Categories
              <ArrowUpRightIcon className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedCatagory;