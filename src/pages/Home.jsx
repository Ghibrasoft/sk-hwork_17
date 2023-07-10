import React from "react";
import characters from "../data/data.json";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <section className="h-full flex flex-col justify-center items-center gap-10">
      <h1 className="w-fit border-b-4 border-teal-500 text-5xl font-bold">
        Pirates of the Caribbean
      </h1>

      {/* cards wrapper */}
      <div className="w-[95%] grid grid-cols-5 gap-5">
        {/* card */}
        {characters.map(({ id, character, about, factId, imageUrl }) => (
          <div
            key={id}
            className="h-fit p-5 border rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-all"
          >
            <img
              src={imageUrl}
              alt={character}
              className="w-full h-[200px] rounded-lg"
            />
            <h3 className="text-xl font-bold mt-1">{character}</h3>
            <p className="h-40 overflow-clip mt-3 p-1 border-t-2">{about}</p>
            <div className="flex justify-between mt-1">
              <button
                onClick={() =>
                  factId ? navigate(`/fact/${factId}`) : navigate("/404")
                }
                className="text-teal-500 hover:underline"
              >
                Fact
              </button>
              <Link
                to={`/about/${id}`}
                className="text-teal-500 hover:underline"
              >
                Show more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
