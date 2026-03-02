import SkeletonCard from "@/components/i-skeletons/skeleton-card";
import React from "react";

export default function ProductLoading() {
  return (
    <div className="pt-20 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4   ">
      {Array.from({ length: 8 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
