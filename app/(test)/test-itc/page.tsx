import React from "react";
import { animalList, AnimalType } from "./animalPhoto";
import { Divide } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  const data: AnimalType[] = animalList;

  return (
    <div className="flex flex-row gap-10 justify-between">
      {data.map((a, index) => (
        <Link key={index} href={`/test-itc/${a.id}`}>
          <div>
            <Image key={a.id} src={a.src} alt={a.title} className="w-50 h-50" />
          </div>
        </Link>
      ))}
    </div>
  );
}
