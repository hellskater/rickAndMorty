// Hook to consume the episode list context

import { useContext } from "react";

import { EpisodeContext } from "../context/EpisodeContextProvider";

export const useEpisodeContext = () => useContext(EpisodeContext);
