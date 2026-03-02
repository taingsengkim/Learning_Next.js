import React from "react";
import { animalList } from "../animalPhoto";
import Image from "next/image";

export default async function PageSlug({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const animal = animalList.find((a) => a.id.toString == id.toString);
  return (
    <div>
      <h1>This is page {id}</h1>
      <Image src={animal?.src} alt={animal?.title} />
    </div>
  );
}
