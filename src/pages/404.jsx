import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <section className="h-full flex flex-col justify-center items-center gap-10">
      <div className="flex items-center gap-3">
        <h1 className="bg-teal-500 text-white text-5xl px-4 py-2 rounded-xl font-bold shadow-lg">
          404:
        </h1>
        <p className="text-3xl font-bold">Fact or Page not found</p>
      </div>
      <Link
        to={"/"}
        className="ring-2 ring-teal-500 rounded-full px-4 py-2 shadow-lg hover:text-teal-500 active:bg-teal-100 active:ring-offset-2 transition-all"
      >
        Back to Home
      </Link>
    </section>
  );
}
