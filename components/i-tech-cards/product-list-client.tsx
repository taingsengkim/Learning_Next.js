"use client";

import { ProductResponse } from "@/lib/type/product-response";
import { use } from "react";
import ProductCard from "./product-card1";

export default function ProductListClient({
  fetchProducts,
}: {
  fetchProducts: Promise<ProductResponse[]>;
}) {
  const products = use(fetchProducts);
  return (
    <div className="pt-20 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4   ">
      {products.map((product: ProductResponse) => (
        <ProductCard
          key={product.id}
          images={[product.images[0]]}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
}
