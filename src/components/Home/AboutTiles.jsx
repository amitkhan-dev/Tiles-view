
"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";

export default function AboutTiles() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto bg-linear-to-br from-neutral-950 via-emerald-950/80 to-stone-950 border border-emerald-900/40 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
        
        {/* Subtle Ambient Green Light Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl -z-0 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Side: Information */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full inline-block">
              About TilesNest
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Crafting Elegance for Every Surface & Space
            </h2>
            
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              At TilesNest, we curate premium-grade ceramic, porcelain, and polished marble tiles engineered for modern aesthetic living. Whether you are redesigning a cozy kitchen backsplash, a luxurious bathroom, or an expansive commercial space, our tiles combine enduring strength with timeless elegance.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
              <div className="p-4 bg-neutral-900/90 border border-emerald-900/30 rounded-2xl text-center backdrop-blur-sm">
                <h3 className="text-2xl sm:text-3xl font-bold text-emerald-400">500+</h3>
                <p className="text-xs text-neutral-400 mt-1">Tile Designs</p>
              </div>
              <div className="p-4 bg-neutral-900/90 border border-emerald-900/30 rounded-2xl text-center backdrop-blur-sm">
                <h3 className="text-2xl sm:text-3xl font-bold text-emerald-400">100%</h3>
                <p className="text-xs text-neutral-400 mt-1">Authentic Grade</p>
              </div>
              <div className="p-4 bg-neutral-900/90 border border-emerald-900/30 rounded-2xl text-center backdrop-blur-sm">
                <h3 className="text-2xl sm:text-3xl font-bold text-emerald-400">10k+</h3>
                <p className="text-xs text-neutral-400 mt-1">Happy Homes</p>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/all-tiles">
                <Button color="success" radius="full" className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 shadow-lg shadow-emerald-900/40">
                  Explore Our Collections
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side: Feature Highlights Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-neutral-900/70 border border-emerald-900/30 p-6 rounded-2xl space-y-2 hover:border-emerald-500/40 transition-colors backdrop-blur-sm">
              <h4 className="text-white font-semibold text-base">Stain & Water Resistant</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Engineered with high-density glazing to resist deep stains, moisture absorption, and daily spills.
              </p>
            </div>

            <div className="bg-neutral-900/70 border border-emerald-900/30 p-6 rounded-2xl space-y-2 hover:border-emerald-500/40 transition-colors backdrop-blur-sm">
              <h4 className="text-white font-semibold text-base">Scratch Resistant</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Durable surfaces designed to handle heavy foot traffic and furniture movements effortlessly.
              </p>
            </div>

            <div className="bg-neutral-900/70 border border-emerald-900/30 p-6 rounded-2xl space-y-2 hover:border-emerald-500/40 transition-colors backdrop-blur-sm">
              <h4 className="text-white font-semibold text-base">Precision Sizing</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Laser-cut edges ensure seamless installation with minimal grout line gaps.
              </p>
            </div>

            <div className="bg-neutral-900/70 border border-emerald-900/30 p-6 rounded-2xl space-y-2 hover:border-emerald-500/40 transition-colors backdrop-blur-sm">
              <h4 className="text-white font-semibold text-base">Eco-Friendly Process</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Sourced using sustainable minerals and low-carbon manufacturing technologies.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}