import React from "react";
import { useParams } from "react-router-dom";
import characters from "../data/data.json";

export default function Fact() {
  const { factId } = useParams();

  return (
    <section className="h-full flex flex-col justify-center items-center gap-10">
      <h1 className="w-fit border-b-4 border-teal-500 text-5xl font-bold">
        Fact
      </h1>
      {characters
        .filter(({ id }) => id === parseInt(factId))
        .map(({ id, fact }) => (
          <div key={id}>
            <h3>{fact}</h3>
          </div>
        ))}
    </section>
  );
}
