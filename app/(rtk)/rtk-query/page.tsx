import React from "react";
import RTKQueryPage from "./RtkQueryPage";
import { getCategories } from "@/lib/data/categories";
import UploadProduct from "@/components/forms/upload-product-form";

export default function page() {
  const categories = getCategories();

  return (
    <>
      <RTKQueryPage />
      <div className="container mx-auto">
        <UploadProduct categories={categories} />
      </div>
    </>
  );
}
