import { Suspense } from "react";
import ProductLoading from "./loading";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto ">
      <Suspense fallback={<ProductLoading />}>{children}</Suspense>
    </div>
  );
}
