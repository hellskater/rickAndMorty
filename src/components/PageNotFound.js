// Page to show when the user hits an unexpected route

import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

function PageNotFound() {
  return (
    <div className=" p-4 w-full bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-900 sm:h-screen overflow-x-hidden">
      <Header />
      <div className="h-[calc(100%-5.5rem)] w-full flex flex-col justify-center items-center text-white ">
        <p className="text-7xl">404</p>
        <p className="text-5xl">PAGE NOT FOUND</p>

        {/* Button to redirect user to the home page */}
        <Link
          to="/"
          className="text-2xl h-14 w-48 flex justify-center p-4 rounded-xl mt-5 items-center bg-gradient-to-r from-indigo-600 to-cyan-400 cursor-pointer"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
