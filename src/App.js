// Component where all the routes are defined

import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import CharacterDetails from "./components/CharacterDetails";
import EpisodeContext from "./context/EpisodeContextProvider";
import PageNotFound from "./components/PageNotFound";
import SearchContext from "./context/SearchContextProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <EpisodeContext>
        <SearchContext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character/:id" element={<CharacterDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </SearchContext>
      </EpisodeContext>
    </QueryClientProvider>
  );
}

export default App;
