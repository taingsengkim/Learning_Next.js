"use client";

import UploadProduct from "@/components/forms/upload-product-form";
import {
  useGetCategoriesQuery,
  useGetProductByIdQuery,
} from "@/lib/features/products/productApi";
import { getCategories } from "@/lib/data/categories";
import { useParams } from "next/navigation";

export default function UpdateProduct() {
  const { id } = useParams();
  const { data: category } = useGetCategoriesQuery();

  const { data: product, isLoading } = useGetProductByIdQuery(id as string);

  if (isLoading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="container mx-auto">
      <UploadProduct
        categories={category || []}
        product={product}
        isEdit={true}
      />
    </div>
  );
}
