"use client";
import React from 'react';

import { Skeleton, Card } from "@heroui/react";

const loading = () => {
  return (
    <div className="min-h-screen bg-neutral-50/50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Skeleton */}
        <div className="flex items-center gap-2 mb-8">
          <Skeleton className="h-4 w-16 rounded-md" />
          <span className="text-neutral-300">/</span>
          <Skeleton className="h-4 w-20 rounded-md" />
          <span className="text-neutral-300">/</span>
          <Skeleton className="h-4 w-32 rounded-md" />
        </div>

        {/* Product Details Grid Skeleton */}
        <Card className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-10 shadow-sm" radius="none">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left: Product Image Skeleton */}
            <div className="space-y-4">
              <Skeleton className="rounded-2xl w-full">
                <div className="h-80 sm:h-[450px] bg-default-300 rounded-2xl"></div>
              </Skeleton>
            </div>

            {/* Right: Product Info Skeleton */}
            <div className="space-y-6">
              
              {/* Category & Stock Badge */}
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-24 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>

              {/* Title & Material */}
              <div className="space-y-3">
                <Skeleton className="h-9 w-3/4 rounded-xl" />
                <Skeleton className="h-4 w-1/3 rounded-lg" />
              </div>

              {/* Price Skeleton */}
              <div className="py-2">
                <Skeleton className="h-10 w-36 rounded-xl" />
              </div>

              {/* Description Skeleton */}
              <div className="space-y-2 border-t border-b border-neutral-100 py-4">
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-5/6 rounded-lg" />
                <Skeleton className="h-4 w-2/3 rounded-lg" />
              </div>

              {/* Specifications Grid Skeleton */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <Skeleton className="h-14 rounded-xl" />
                <Skeleton className="h-14 rounded-xl" />
              </div>

              {/* Action Buttons Skeleton */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Skeleton className="h-12 w-full rounded-full" />
                <Skeleton className="h-12 w-full rounded-full" />
              </div>

            </div>

          </div>
        </Card>

      </div>
    </div>
  );
};

export default loading;