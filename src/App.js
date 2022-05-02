// Component where all the routes are defined

import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import CharacterDetails from "./components/CharacterDetails";
import EpisodeContext from "./context/EpisodeContextProvider";
import PageNotFound from "./components/PageNotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <EpisodeContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </EpisodeContext>
    </QueryClientProvider>
  );
}

export default App;
