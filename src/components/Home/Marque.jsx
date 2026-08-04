"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { Sparkles, Truck, ShieldCheck, Phone, Tag, TruckElectricIcon } from "lucide-react";

const marqueeItems = [
  {
    icon: Tag,
    text: "20% OFF on all Marble Finish Tiles — Use Code: MARBLE20",
  },
  {
    icon: Truck,
    text: "Fast & Safe Express Delivery All Across Bangladesh",
  },
  {
    icon: ShieldCheck,
    text: "100% Premium Quality Guaranteed Ceramic & Porcelain Tiles",
  },
  {
    icon: Phone,
    text: "Need Help? Call Our Tile Experts: +880 17000001",
  },
  {
    icon: Sparkles,
    text: "Explore Our Exclusive New Outdoor Garden Tile Collection",
  },
];

const HeaderMarquee = () => {
  return (
    <div className="bg-green-800 container mx-auto text-neutral-100 border-b border-neutral-800 text-xs sm:text-sm py-2.5 overflow-hidden select-none relative z-50">
      <Marquee
        speed={45}
        pauseOnHover={true}
        gradient={TruckElectricIcon}
      >
        <div className="flex  items-center gap-8 pr-8">
          {marqueeItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-2">
                <Icon className="w-7 h-7 text-amber-400 shrink-0" />
                <span className="font-medium tracking-wide">{item.text}</span>
                <span className="ml-6 text-white">|</span>
              </div>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default HeaderMarquee;