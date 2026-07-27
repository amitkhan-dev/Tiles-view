import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@heroui/react';
import { ArrowRight, Clock, ShieldCheck, Sparkles, Truck } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section className="relative container mx-auto overflow-hidden my-4 border bg-background shadow-sm">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-linear-to-tr from-green-800/20 to-primary/20 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col gap-8 lg:gap-12">
          
          {/* banner image */}
          <div className="order-1 w-full relative rounded-2xl overflow-hidden shadow-2xl border border-default-200/80 group">
            <Image
              src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1000&auto=format&fit=crop"
              alt="Modern Luxury Tiles Showcase"
              width={1280}
              height={600}
              priority
              className="w-full h-[280px] sm:h-[420px] lg:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"/>
            
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* floating Badge  */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto p-3 sm:p-4 rounded-xl bg-background/80 backdrop-blur-md border border-white/20 shadow-lg max-w-md">
              <p className="text-xs text-default-400 font-medium">Featured Collection</p>
              <p className="text-sm sm:text-base font-bold text-foreground truncate">Italian Marble Finish Porcelain Tile</p>
            </div>
          </div>

          {/* text */}
          <div className="order-2 w-full space-y-6 text-center lg:text-left">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              
              {/* Left Side*/}
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-800/10 border border-green-800/20 text-green-800 text-xs sm:text-sm font-semibold tracking-wide">
                  <Sparkles className="w-4 h-4 text-green-800" />
                  <span>Premium Ceramic & Porcelain Tiles</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.15]">
                  Transform Your Space With <br className="hidden sm:inline" />
                  <span className="bg-linear-to-r from-green-800 via-emerald-600 to-green-900 bg-clip-text text-transparent">
                    Elegance & Perfection
                  </span>
                </h1>
              </div>

              {/* Right Side */}
              <div className="space-y-6 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                <p className="text-default-500 text-sm sm:text-base font-normal leading-relaxed">
                  Explore our exclusive collection of luxury floor, wall, and outdoor tiles designed to elevate your home architecture.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link href="/all-tiles" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      radius="full"
                      endContent={<ArrowRight className="w-5 h-5" />}
                      className="w-full sm:w-auto font-semibold px-8 bg-green-800 text-white hover:bg-green-900 shadow-xl shadow-green-800/25 hover:scale-105 transition-all cursor-pointer"
                    >
                      Explore Collection
                    </Button>
                  </Link>

                  <Link href="/#features" className="w-full sm:w-auto">
                    <Button
                      variant="flat"
                      size="lg"
                      radius="full"
                      className="w-full sm:w-auto font-semibold px-8 bg-default-100 text-foreground hover:bg-default-200 border border-default-200 hover:scale-105 transition-all cursor-pointer"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>

            </div>

            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-default-200/60 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <ShieldCheck className="w-5 h-5 text-green-800 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-default-600">100% Durable</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Truck className="w-5 h-5 text-green-800 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-default-600">Fast Delivery</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Clock className="w-5 h-5 text-green-800 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-default-600">24/7 Support</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;