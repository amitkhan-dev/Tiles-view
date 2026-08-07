
"use client";

import { Skeleton, Card } from "@heroui/react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-neutral-50/50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Skeleton */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Skeleton className="h-4 w-32 mx-auto rounded-full" />
          <Skeleton className="h-10 w-64 mx-auto rounded-xl" />
          <Skeleton className="h-4 w-3/4 mx-auto rounded-lg" />
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-4">
          <Skeleton className="h-10 w-full lg:w-96 rounded-xl" />
          <div className="flex gap-2 overflow-hidden pt-2">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-24 rounded-full shrink-0" />
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <Card key={i} className="p-4 space-y-4 rounded-2xl border border-neutral-200 shadow-sm" radius="lg">
              {/* Image Box */}
              <Skeleton className="rounded-xl">
                <div className="h-56 bg-default-300"></div>
              </Skeleton>

              {/* Title & Material Text */}
              <div className="space-y-2">
                <Skeleton className="w-1/3 rounded-lg">
                  <div className="h-3 bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-4 bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/3 rounded-lg">
                  <div className="h-3 bg-default-200"></div>
                </Skeleton>
              </div>

              {/* Price & Buttons */}
              <div className="pt-4 space-y-3 border-t border-neutral-100">
                <div className="flex justify-between items-center">
                  <Skeleton className="w-16 h-6 rounded-lg" />
                  <Skeleton className="w-16 h-8 rounded-full" />
                </div>
                <Skeleton className="w-full h-9 rounded-full" />
              </div>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}