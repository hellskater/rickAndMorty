// Header component

import React from "react";
import { Link } from "react-router-dom";

import { useSearchContext } from "../hooks/useSearchContext";

function Header() {
  const [search] = useSearchContext();

  return (
    <div className="bg-gray-900 w-full h-16 p-1 shadow-lg sticky top-0 z-10 flex justify-between">
      {/* Link to the Home page */}
      <Link to="/" className="m-2 text-3xl text-white">
        Rick & Morty <span className="text-2xl text-yellow-300">ricked DB</span>{" "}
      </Link>
      {search !== "" && (
        <p className="m-2 text-3xl text-white">Search text: {search}</p>
      )}
    </div>
  );
}

export default Header;
