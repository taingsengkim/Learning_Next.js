"use client";
import { useGetProductByIdQuery } from "@/lib/features/products/productApi";

export default function ProductDetail({ id }: { id: string }) {
  const { data, isLoading, error } = useGetProductByIdQuery(id);

  if (isLoading)
    return <p className="text-center text-gray-500">Loading product...</p>;
  if (error)
    return <p className="text-center text-red-500">Failed to load product</p>;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-6">
      <img
        src={data?.images[0]}
        alt={data?.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">{data?.title}</h1>
        <p className="mt-2 text-gray-600 text-sm line-clamp-4">
          {data?.description}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-semibold text-green-600">
            ${data?.price}
          </span>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
