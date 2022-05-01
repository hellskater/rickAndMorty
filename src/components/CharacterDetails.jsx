// Component to show the complete profile details of a particular character. User is redirected here after clicking on a character card

import React from "react";
import { useParams } from "react-router-dom";

import { useGetCharacterDetails } from "../hooks/useCharacterDetails";
import { useEpisodeContext } from "../hooks/useEpisodeContext";
import Header from "./Header";

const CharacterDetails = () => {
  const { id } = useParams();

  const episodeList = useEpisodeContext(); // Fetching the list of all the episode names from Context

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  const { data } = useGetCharacterDetails(api); // Fetching the complete profile details of the character using the id parameter

  //   Extracting the episode numbers from array of episode urls
  let episodeNumberList = data?.episode?.map(
    (e) => e.split("/")[e.split("/").length - 1]
  );

  //   Making a list of all the episodes the character was present in using the extracted episode numbers and the episode list fetched from Context
  const episodesAppearedIn = episodeNumberList?.map(
    (number) => episodeList[number - 1]
  );

  return (
    <div className=" p-4 w-full bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-900 sm:h-screen overflow-x-hidden">
      <Header />
      <div className="flex flex-col sm:flex-row mt-5 h-[calc(100%-5.5rem)]">
        {/* Profile Image section */}
        <div className="flex-[0.5] h-full w-full relative overflow-hidden">
          <img
            src={data?.image}
            alt=""
            className="h-full w-full object-cover rounded-xl sm:rounded-l-xl"
          />
          <span
            className={`absolute top-6 -left-10 ${
              data?.status === "Dead"
                ? "bg-red-600"
                : data?.status == "Alive"
                ? "bg-green-600"
                : "bg-gray-500"
            } w-40 text-center p-1 text-white -rotate-45`}
          >
            {data?.status?.toUpperCase()}
          </span>
        </div>

        {/* Profile details section */}
        <div className="flex-[0.5] sm:px-6 sm:py-0 py-4 flex flex-col gap-5 sm:overflow-y-scroll overflow-x-hidden">
          <p className="text-white text-4xl">{data?.name?.toUpperCase()} </p>
          <p className="text-white text-2xl">GENDER: {data?.gender}</p>
          <p className="text-white text-2xl">SPECIES: {data?.species}</p>
          <p className="text-white text-2xl">
            LAST LOCATION: {data?.location?.name}
          </p>
          <p className="text-white text-2xl">ORIGIN: {data?.origin?.name}</p>
          <p className="text-white text-2xl h-full ">
            CHAPTERS APPEARED IN:{" "}
            {episodesAppearedIn?.map((chapter) => (
              <li className="text-xl text-gray-400">{chapter}</li>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
