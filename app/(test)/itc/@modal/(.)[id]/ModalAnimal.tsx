import React from "react";
import { animalList } from "../../animalPhoto";
import Image from "next/image";

export default function ModalAnimal({ id }: { id: string }) {
  const photo = animalList.find((p) => p.id === id)!;
  return (
    <div>
      <h1>Modal Animal</h1>
      <Image src={photo.src} className="w-20 h-20" alt={photo.title} />
    </div>
  );
}
