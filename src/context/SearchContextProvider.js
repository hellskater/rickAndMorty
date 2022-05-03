// Context to store the search value

import { createContext, useState } from "react";

export const SearchContext = createContext();

function SearchContextProvider(props) {
  let [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <SearchContext.Provider value={[search, handleSearch]}>
      {props.children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;
