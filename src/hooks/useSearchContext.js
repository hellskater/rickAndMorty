// Hook to consume the sesarch value context

import { useContext } from "react";

import { SearchContext } from "../context/SearchContextProvider";

export const useSearchContext = () => useContext(SearchContext);
