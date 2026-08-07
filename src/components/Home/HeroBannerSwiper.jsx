import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroBannerSwiper = () => {
  return (
    <div>

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={true}
        speed={1800}
        grabCursor={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="order-1 w-full rounded-2xl overflow-hidden"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-95 sm:h-120 lg:h-137 flex items-center justify-center text-center group border border-default-200/80 shadow-2xl rounded-2xl overflow-hidden">
      
            <Image
              src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop"
              alt="Modern Luxury Tiles Showcase"
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-900"
            />

            <div className="absolute inset-0 bg-black/40" />
      
            <div className="relative z-10 max-w-3xl px-4 sm:px-6 space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-wider text-white uppercase leading-tight font-sans drop-shadow-md">
                BOLD ROOMS CALL FOR BOLD TILES
              </h2>
      
              <p className="text-xs sm:text-sm lg:text-base text-neutral-100 font-medium tracking-wide drop-shadow-sm">
                Find Just That Tile That Will Make Your Room Pop!
              </p>
      
              <div className="pt-2">
                <Link href="/all-tiles">
                  <button className="px-6 py-3 bg-white/90 hover:bg-white text-neutral-800 font-semibold text-xs sm:text-sm uppercase tracking-widest shadow-lg transition-all hover:scale-105 cursor-pointer rounded-sm">
                    BROWSE TILE COLLECTIONS
                  </button>
                </Link>
              </div>
            </div>
      
          </div>
        </SwiperSlide>
      
        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-95 sm:h-120 lg:h-137 flex items-center justify-center text-center group border border-default-200/80 shadow-2xl rounded-2xl overflow-hidden">
      
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop"
              alt="Luxury Tiles"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-900"
            />

            <div className="absolute inset-0 bg-black/40" />
      
            <div className="relative z-10 max-w-3xl px-4 sm:px-6 space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-wider text-white uppercase leading-tight font-sans drop-shadow-md">
                ELEVATE EVERY SPACE WITH ELEGANT TILES
              </h2>
      
              <p className="text-xs sm:text-sm lg:text-base text-neutral-100 font-medium tracking-wide drop-shadow-sm">
              Modern floor, wall, and outdoor tile collections designed for timeless beauty and lasting durability.
              </p>
      
              <div className="pt-2">
                <Link href="/all-tiles">
                  <button className="px-6 py-3 bg-white/90 hover:bg-white text-neutral-800 font-semibold text-xs sm:text-sm uppercase tracking-widest shadow-lg transition-all hover:scale-105 cursor-pointer rounded-sm">
                    BROWSE TILE COLLECTIONS
                  </button>
                </Link>
              </div>
            </div>
      
          </div>
        </SwiperSlide>
      
        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-95 sm:h-120 lg:h-137 flex items-center justify-center text-center group border border-default-200/80 shadow-2xl rounded-2xl overflow-hidden">
      
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop"
              alt="Premium Ceramic Tiles"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-900"
            />

            <div className="absolute inset-0 bg-black/40" />
      
            <div className="relative z-10 max-w-3xl px-4 sm:px-6 space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-wider text-white uppercase leading-tight font-sans drop-shadow-md">
                PREMIUM TILES FOR MODERN LIVING
              </h2>
      
              <p className="text-xs sm:text-sm lg:text-base text-neutral-100 font-medium tracking-wide drop-shadow-sm">
                Explore stylish, durable, and affordable tile collections that bring your dream interiors to life.
              </p>
      
              <div className="pt-2">
                <Link href="/all-tiles">
                  <button className="px-6 py-3 bg-white/90 hover:bg-white text-neutral-800 font-semibold text-xs sm:text-sm uppercase tracking-widest shadow-lg transition-all hover:scale-105 cursor-pointer rounded-sm">
                    BROWSE TILE COLLECTIONS
                  </button>
                </Link>
              </div>
            </div>
      
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroBannerSwiper;