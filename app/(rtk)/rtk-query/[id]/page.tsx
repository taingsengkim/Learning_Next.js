import React from "react";
import ProductDetail from "./ProductDetail";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  return (
    <div>
      <ProductDetail id={id} />
    </div>
  );
}
