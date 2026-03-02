import React from "react";
import { animalList } from "../animalPhoto";
import Image from "next/image";

export default async function AnimalDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo = animalList.find((p) => p.id === id)!;
  //   ! = non null
  return (
    <div>
      <h1>Dynamic Route {id}</h1>
      <Image src={photo.src} alt={photo.title} className="w-50 h-50" />
    </div>
  );
}
