import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string[] }>;
}) {
  const { id } = await params;
  const currentPath = id.join(" > ");
  return <div>{currentPath}</div>;
}
