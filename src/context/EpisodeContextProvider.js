// Context to fetch and store the name of all the episodes and provide it to the children

import { createContext, useState, useEffect } from "react";

export const EpisodeContext = createContext();

function EpisodeContextProvider(props) {
  const [episodeList, setEpisodeList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  // To find out the number times we have to make the api call to get the list of all the episodes
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((result) => result.info?.pages)
      .then((pages) => setTotalPages(pages));
  }, []);

  // To fetch and store the list of all the episode names after we get the number times we have to make the api call
  useEffect(() => {
    for (let i = 1; i <= totalPages; i++) {
      fetch(`https://rickandmortyapi.com/api/episode?page=${i}`)
        .then((res) => res.json())
        .then((res) => res.results?.map((episode) => episode.name))
        .then((arr) =>
          setEpisodeList((episodeList) => [...episodeList, ...arr])
        );
    }
  }, [totalPages]);

  return (
    <EpisodeContext.Provider value={episodeList}>
      {props.children}
    </EpisodeContext.Provider>
  );
}

export default EpisodeContextProvider;
