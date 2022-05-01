// Header component

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-gray-900 w-full h-16 p-1 shadow-lg sticky top-0 z-10">
      {/* Link to the Home page */}
      <Link to="/" className="m-2 text-3xl text-white">
        Rick & Morty <span className="text-2xl text-yellow-300">ricked DB</span>{" "}
      </Link>
    </div>
  );
}

export default Header;
