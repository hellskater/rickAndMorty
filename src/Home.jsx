// Landing page and component where all the other components are rendered

import React, { useState } from "react";

import Cards from "./components/Cards";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { useGetCharacterList } from "./hooks/useCharacterList";

function Home() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  const { data, isSuccess } = useGetCharacterList(api); // React Query hook to fetch the list of characters

  const handleSearch = (e) => {
    e.preventDefault();
    setTimeout(() => setSearch(e.target.value), 1500);
  };

  return (
    <div className="h-full p-4 w-full bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-900 min-h-screen overflow-x-hidden">
      <Header />
      <div className="mt-14">
        <p className="text-center text-4xl text-white">Character List</p>

        {/* Search component */}

        <div className="flex w-full justify-center items-center m-4">
          <input
            type="text"
            onChange={(e) => handleSearch(e)}
            className="outline-none border-0 rounded-lg mr-4 h-10 p-4 w-96 text-center text-xl"
            placeholder="Search Characters"
          />
        </div>
      </div>

      {/* If the API call was successful then render the character cards */}

      {isSuccess && (
        <>
          <div className="flex justify-center flex-col items-center">
            <Cards data={data} />
          </div>
          <div>
            <Pagination
              info={data.info}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
