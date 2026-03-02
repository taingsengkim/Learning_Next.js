import React from "react";
import ModalAnimal from "./ModalAnimal";

export default async function ModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ModalAnimal id={id} />;
}
