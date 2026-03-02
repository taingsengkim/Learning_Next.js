import React from "react";

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <nav>Nav</nav>
      <div>
        {modal}
        <div>{children}</div>
      </div>
    </>
  );
}
