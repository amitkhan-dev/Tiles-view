"use client";

import React, { useState } from "react";
import { Input, Button } from "@heroui/react";
import { Search, SlidersHorizontal, Layers, CircleDollarSign } from "lucide-react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ searchTerm, category, priceRange });
  };

  return (
    <div className="relative container mx-auto overflow-hidden my-8 border bg-background shadow-sm">
      <form
        onSubmit={handleSearch}
        className="p-4 sm:p-6  bg-background border border-default-200/80 shadow-xl space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/*  Search Input */}
          <div className="md:col-span-5">
            <Input
              type="text"
              placeholder="Search tiles by name, pattern, or color..."
              value={searchTerm}
              onValueChange={setSearchTerm}
              startContent={
                <Search className="w-5 h-5 text-default-400 shrink-0" />
              }
              variant="flat"
              radius="full"
              size="lg"
              classNames={{
                inputWrapper: "bg-default-100/70 border border-default-200 focus-within:border-green-800 transition-colors",
              }}/>
          </div>

          {/*Category Select */}
          <div className="md:col-span-3 relative flex items-center">
            <Layers className="w-5 h-5 text-default-400 absolute left-4 z-10 pointer-events-none" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full h-12 pl-12 pr-4 bg-default-100/70 border border-default-200 text-default-700 rounded-full text-sm focus:outline-none focus:border-green-800 appearance-none cursor-pointer">
              <option value="">All Categories</option>
              <option value="floor">Floor Tiles</option>
              <option value="wall">Wall Tiles</option>
              <option value="porcelain">Porcelain Tiles</option>
              <option value="outdoor">Outdoor & Garden</option>
              <option value="marble">Marble Finish</option>
            </select>
          </div>

          {/* Price Filter */}
          <div className="md:col-span-2 relative flex items-center">
            <CircleDollarSign className="w-5 h-5 text-default-400 absolute left-4 z-10 pointer-events-none" />
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full h-12 pl-12 pr-4 bg-default-100/70 border border-default-200 text-default-700 rounded-full text-sm focus:outline-none focus:border-green-800 appearance-none cursor-pointer">
              <option value="">Price Range</option>
              <option value="low">Under $50</option>
              <option value="mid">$50 - $100</option>
              <option value="high">Above $100</option>
            </select>
          </div>

          {/* Action Button */}
          <div className="md:col-span-2">
            <Button
              type="submit"
              size="lg"
              radius="full"
              startContent={<SlidersHorizontal className="w-5 h-5" />}
              className="w-full font-semibold bg-green-800 text-white hover:bg-green-900 shadow-lg cursor-pointer">Filter</Button>
          </div>

        </div>
      </form>
    </div>
  );
}