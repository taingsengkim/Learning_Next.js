import React from "react";
import { animalList } from "./animalPhoto";
import Image from "next/image";

export default function loading() {
  return (
    <div className="h-screen">
      <div className="flex flex-warp justify-around ">
        {[...Array(6)].map((_, index) => (
          <div className="mt-10 w-20 h-20  bg-amber-400 p-5 rounded-2xl"></div>
        ))}
      </div>
    </div>
  );
}
