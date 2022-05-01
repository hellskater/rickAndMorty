// Component where all the routes are defined

import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import CharacterDetails from "./components/CharacterDetails";
import EpisodeContext from "./context/EpisodeContextProvider";
import PageNotFound from "./components/PageNotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <EpisodeContext>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character/:id" element={<CharacterDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </EpisodeContext>
    </QueryClientProvider>
  );
}

export default App;
