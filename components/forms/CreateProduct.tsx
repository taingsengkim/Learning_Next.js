"use client";

import UploadProduct from "@/components/forms/upload-product-form";
import { getCategories } from "@/lib/data/categories";
import { useGetCategoriesQuery } from "@/lib/features/products/productApi";
import React from "react";
import { Spinner } from "@heroui/react";

export default function CreateProductComponent() {
  // const categories = getCategories();

  const { data, isLoading } = useGetCategoriesQuery();
  if (isLoading) {
    return (
      <div className="flex items-center gap-4">
        <p>loading</p>
      </div>
    );
  }
  return (
    <div className="container w-100 mx-auto">
      <UploadProduct categories={data || []} product={null} isEdit={false} />
    </div>
  );
}
