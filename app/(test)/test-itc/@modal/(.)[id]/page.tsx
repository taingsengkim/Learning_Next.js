import React, { use } from "react";
import ModalComponent from "./ModalComponent";

export default function ModalAnimal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return (
    <div>
      <ModalComponent id={id} />
    </div>
  );
}
