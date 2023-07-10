import React from "react";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-14 bg-slate-800 text-white">
        <Navbar />
      </header>
      <main className="flex-grow flex">
        <div className="flex-grow">{children}</div>
      </main>
    </div>
  );
}
