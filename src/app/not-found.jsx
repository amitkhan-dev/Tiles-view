"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { Home, ArrowLeft, Grid, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        
        <div className="relative flex justify-center items-center">
          
          <div className="absolute w-72 h-72 bg-linears-to-tr from-primary/30 to-secondary/30 rounded-full blur-3xl -z-10 animate-pulse" />

          <div className="relative flex items-center justify-center gap-4 select-none">
            <span className="text-8xl sm:text-9xl font-black bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent tracking-tighter">4</span>

            <div className="p-4 sm:p-6 bg-background/60 backdrop-blur-xl border border-default-200/50 rounded-3xl shadow-2xl flex items-center justify-center animate-bounce">
              <SearchX className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
            </div>

            <span className="text-8xl sm:text-9xl font-black bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent tracking-tighter">4</span>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-green-800">Oops! Page Not Found
          </h1>
          <p className="text-default-500 text-base sm:text-lg max-w-md mx-auto">The tile or page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            as={Link}
            href="/"
            size="lg"
            radius="full"
            startContent={<Home className="w-5 h-5" />}
            className="w-full sm:w-auto font-semibold px-8 hover:scale-105 transition-all bg-green-800 text-white hover:bg-green-900 shadow-lg shadow-green-800/30">Back to Home </Button>

          <Button
            as={Link}
            href="/all-tiles"
            variant="flat"
            size="lg"
            radius="full"
            startContent={<Grid className="w-5 h-5 text-green-800" />}
            className="w-full sm:w-auto font-semibold px-8 hover:scale-105 transition-all bg-green-800/10 text-green-800 border border-green-800/20 hover:bg-green-800/20">Explore All Tiles
          </Button>
        </div>


        <div className="pt-2">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-sm text-default-400 hover:scale-105 transition-all bg-green-800/10 text-green-800 border border-green-800/20 hover:bg-green-800/20 font-medium cursor-pointer p-2 rounded-full ">
            <ArrowLeft className="w-4 h-4" /> Go back to previous page
          </button>
        </div>

      </div>
    </div>
  );
}