import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="h-full flex">
      <h1 className="h-full flex items-center text-2xl ml-10">Navbar</h1>
      <div className="h-full flex items-center ms-auto mr-20">
        {location.pathname !== "/" && (
          <Link
            to={"/"}
            className="h-full flex items-center px-7 hover:bg-teal-500 transition-colors"
          >
            Home
          </Link>
        )}
      </div>
    </nav>
  );
}
