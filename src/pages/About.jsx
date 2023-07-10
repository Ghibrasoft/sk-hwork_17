import React from "react";
import characters from "../data/data.json";
import { useParams } from "react-router-dom";

export default function About() {
  const { aboutId } = useParams();

  return (
    <section className="h-full flex flex-col justify-center items-center gap-10">
      <h1 className="w-fit border-b-4 border-teal-500 text-5xl font-bold">
        About
      </h1>
      {characters
        .filter(({ id }) => id === parseInt(aboutId))
        .map(({ id, character, about, imageUrl }) => (
          <div
            key={id}
            className="w-[700px] flex flex-col items-center shadow-lg border rounded-lg p-10"
          >
            <img
              src={imageUrl}
              alt={character}
              className="w-[350px] h-[350px] rounded-lg object-cover"
            />
            <h3 className="text-3xl font-bold">{character}</h3>
            <p>{about}</p>
          </div>
        ))}
    </section>
  );
}
