import React, { use } from "react";

export default async function ServerToClientCard({
  categories,
}: {
  categories: Promise<{ id: string; name: string }>;
}) {
  const cate = use(categories);
  return (
    <div>
      <p>{cate.id}</p>
      <p>{cate.name}</p>
    </div>
  );
}
