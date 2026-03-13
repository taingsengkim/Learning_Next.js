"use client";

import UploadProduct from "@/components/forms/upload-product-form";
import { getCategories } from "@/lib/data/categories";
import { useGetProductsQuery } from "@/lib/features/products/productApi";

export default function RTKQueryPage() {
  const { data, error, isLoading } = useGetProductsQuery();

  if (error) return <p>Oh no, there was an error</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {data?.map((product: any) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
        >
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-56 object-cover"
          />

          <div className="p-4">
            <h2 className="text-lg font-semibold">{product.title}</h2>

            <p className="text-gray-500 text-sm mt-1 line-clamp-2">
              {product.description}
            </p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold text-green-600">
                ${product.price}
              </span>

              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                Buy
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
