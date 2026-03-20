import ProductCard from "@/components/i-tech-cards/product-card1";
import { ProductResponse } from "@/lib/type/product-response";
import { AwardIcon } from "lucide-react";
import { title } from "process";
import React from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getData() {
  console.log(API_URL);
  const res = await fetch(`${API_URL}/products`);
  const data = await res.json();
  return data;
}

export default async function ShopPage() {
  const products: ProductResponse[] = await getData();
  console.log(products);
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
