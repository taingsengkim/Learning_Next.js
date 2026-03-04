import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Price, PriceValue } from "./price";
import Image from "next/image";
import { ProductCardProps } from "@/lib/type/product-card-props";

export default function ProductCard({
  title = "Product Slug",
  price = 100,
  description = "Product Description",
  images = [],
}: ProductCardProps) {
  return (
    <Card className="h-full  overflow-hidden p-0">
      <CardHeader className="relative block p-0 ">
        <AspectRatio ratio={1.268115942} className="overflow-hidden">
          <Image
            src={
              typeof images?.[0] === "string" && images[0].startsWith("http")
                ? images[0]
                : "https://geekflare.com/wp-content/uploads/2023/03/img-placeholder.png"
            }
            alt={title}
            width={500}
            height={400}
            className="object-cover"
          />
          {/* <Image
            src={images[0]}
            alt={title}
            width={500}
            height={500}
            className="block size-full  object-cover object-center"
          /> */}
        </AspectRatio>
      </CardHeader>
      <CardContent className="flex h-full flex-col gap-4 pb-6">
        <CardTitle className="text-xl font-semibold line-clamp-1">
          {title}
        </CardTitle>
        <CardDescription className="font-medium text-muted-foreground line-clamp-3">
          {description}
        </CardDescription>
        <div className="mt-auto">
          <Price className="text-lg font-semibold">
            <PriceValue price={price} variant="sale" />
          </Price>
        </div>
      </CardContent>
    </Card>
  );
}
