// Component to render a single character card as per the profile props

import React from "react";
import { Link } from "react-router-dom";

function Card({ character }) {
  let { status, species, id, name, image, location } = character; // Destructuring all the properties from the character object
  return (
    // The character card is wrapped in Link, clicking on which the user is redirected to the complete character profile page

    <Link
      to={`/character/${id}`}
      className={`relative w-60 h-[25.5rem] bg-gradient-to-r from-[#232526] to-[#414345] rounded-xl overflow-hidden ${
        status === "Dead"
          ? "border-red-300"
          : status == "Alive"
          ? "border-green-300"
          : "border-gray-300"
      }  border-4 cursor-pointer`}
    >
      <div>
        <img className="w-full h-48 object-cover" src={image} alt="" />
        <span
          className={`absolute top-6 -left-10 ${
            status === "Dead"
              ? "bg-red-600"
              : status == "Alive"
              ? "bg-green-600"
              : "bg-gray-500"
          } w-40 text-center p-1 text-white -rotate-45`}
        >
          {status.toUpperCase()}
        </span>
      </div>
      <div className="text-white p-3 text-center">
        <p className="text-2xl ">{name}</p>
        <p className="text-xl mb-5 text-blue-300">{species}</p>
        <p className="text-gray-300 text-lg">Last Location </p>
        <p className="text-xl">{location.name}</p>
      </div>
    </Link>
  );
}

export default Card;
