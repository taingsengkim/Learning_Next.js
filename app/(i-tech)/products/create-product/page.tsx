import UploadProduct from "@/components/forms/upload-product-form";
import { getCategories } from "@/lib/data/categories";
import React from "react";

export default function CreateProduct() {
  const categories = getCategories();
  return (
    <div className="container w-100 mx-auto">
      <UploadProduct categories={categories} />
    </div>
  );
}
