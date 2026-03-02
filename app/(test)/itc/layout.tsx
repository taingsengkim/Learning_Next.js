import React from "react";

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      {modal}
      <div>
        <h1 className="text-center pt-10 font-medium text-5xl">
          Intercept Route
        </h1>
        {children}
      </div>
    </div>
  );
}
