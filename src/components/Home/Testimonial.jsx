"use client";

import React from "react";
import { Avatar } from "@heroui/react";
import { Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rafiqul Islam",
    role: "Interior Designer",
    comment:
      "Clay&Crown delivered top-notch ceramic tiles for my apartment project in Dhaka. The finish and durability exceeded my expectations. The delivery was fast, and every tile arrived in perfect condition.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    id: 2,
    name: "Anika Rahman",
    role: "Homeowner",
    comment:
      "The marble finish completely transformed my living room. The customer support team was incredibly helpful in selecting the perfect tiles and calculating the required quantity.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
  },
  {
    id: 3,
    name: "Tanvir Ahmed",
    role: "Architect",
    comment:
      "Excellent quality floor tiles for commercial projects. Competitive pricing, secure packaging, and not a single tile arrived damaged. Highly recommended.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">

          <h2 className="mt-6 text-4xl font-black text-gray-900">
            What Our Customers Say
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-8">
            Thousands of homeowners, architects and interior designers trust
            <span className="font-semibold text-emerald-600">
              {" "}
              TilesNest
            </span>{" "}
            for premium quality tiles, reliable service and exceptional customer
            support.
          </p>

          {/* Rating */}
          <div className="mt-8 flex flex-col items-center">

            <div className="flex gap-1 text-yellow-500 text-xl">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="mt-2 text-gray-600 text-sm">
              <span className="font-bold text-gray-900">4.9/5</span> Average
              Rating • Based on 2,000+ Happy Customers
            </p>

          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >

            
              <Quote className="w-10 h-10 text-emerald-500 opacity-25" />

              {/* Stars */}
              <div className="flex gap-1 text-yellow-500 mt-5">
                {[...Array(item.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

            
              <p className="mt-6 text-gray-600 leading-8 italic text-[15px] grow">
                {item.comment}
              </p>

              {/* User */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">

                <Avatar
                  src={item.avatar}
                  name={item.name}
                  className="w-14 h-14 ring-4 ring-emerald-100"
                />

                <div className="flex-1">

                  <h4 className="font-bold text-gray-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>

                  <span className="inline-block mt-2 rounded-full bg-green-100 px-3 py-1 text-[11px] font-semibold text-green-700">
                    ✓ Verified Customer
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}