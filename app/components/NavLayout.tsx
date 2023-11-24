import React from "react";
import NavBar from "./NavBar";

export default function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex flex-col">
      <section className="w-full h-full">{children}</section>
      <NavBar />
    </div>
  );
}
