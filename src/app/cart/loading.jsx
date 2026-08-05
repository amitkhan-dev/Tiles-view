"use client";
import React from 'react';
import { Skeleton, Card } from "@heroui/react";

const Cartloading = () => {
  return (
    <div className="min-h-screen bg-neutral-50/50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Title Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-8 w-48 rounded-xl" />
          <Skeleton className="h-4 w-32 rounded-lg" />
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: Cart Items List (2 Columns in LG) */}
          <div className="lg:col-span-2 space-y-4">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="p-4 sm:p-6 bg-white border border-neutral-200 rounded-2xl shadow-sm" radius="none">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {/* Product Thumbnail */}
                  <Skeleton className="rounded-xl shrink-0">
                    <div className="w-24 h-24 bg-default-300 rounded-xl"></div>
                  </Skeleton>

                  {/* Info & Controls */}
                  <div className="flex-1 space-y-3 w-full">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2 w-2/3">
                        <Skeleton className="h-5 w-3/4 rounded-lg" />
                        <Skeleton className="h-3 w-1/2 rounded-md" />
                      </div>
                      <Skeleton className="h-6 w-16 rounded-lg" />
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      {/* Quantity Controls */}
                      <Skeleton className="h-9 w-28 rounded-full" />
                      {/* Remove Button */}
                      <Skeleton className="h-8 w-8 rounded-full" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Right: Order Skeleton  */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-white border border-neutral-200 rounded-2xl space-y-6 shadow-sm" radius="none">
              <Skeleton className="h-6 w-1/2 rounded-lg" />

              <div className="space-y-4 border-t border-b border-neutral-100 py-4">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-20 rounded-md" />
                  <Skeleton className="h-4 w-16 rounded-md" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-24 rounded-md" />
                  <Skeleton className="h-4 w-12 rounded-md" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-16 rounded-md" />
                  <Skeleton className="h-4 w-16 rounded-md" />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <Skeleton className="h-6 w-20 rounded-lg" />
                <Skeleton className="h-7 w-24 rounded-lg" />
              </div>

              {/* Checkout Button */}
              <Skeleton className="h-12 w-full rounded-full" />
            </Card>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Cartloading;