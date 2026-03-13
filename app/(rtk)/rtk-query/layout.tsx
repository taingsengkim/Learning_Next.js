import UploadProduct from "@/components/forms/upload-product-form";
import { getCategories } from "@/lib/data/categories";
import React from "react";

export default function RTKLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
