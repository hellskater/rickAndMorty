// Component to render all the character cards from the array of results received from parent as prop

import React from "react";
import Card from "./Card";

function Cards({ data }) {
  const { results } = data; // Destructuring results from the fetched API data
  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center gap-6 p-5">
      {/* Mapping through the array of character data and rending the character document for each element */}

      {results.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}

export default Cards;
