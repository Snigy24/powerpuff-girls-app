import "./App.css";
import ShowPage from "./pages/ShowPage";
import EpisodePage from "./pages/EpisodePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EpisodeDetails } from "./Types/ListEpisodeType";
import { GlobalContext } from "./globalcontext/globalContext";
import { useState } from "react";

/**
 * The App function is the main function of the application. It is the first function that is called
 * when the application is loaded. It is responsible for rendering the main components of the
 * application
 * @returns The App component is returning the GlobalContext.Provider component.
 */
function App() {
  const [episodeDetails, setEpisode] = useState<EpisodeDetails>({
    episodeName: "",
    coverImage: "",
    episodeSeason: 0,
    episodeNumber: 0,
    summary: "",
    releaseDate: "",
  });
  return (
    <GlobalContext.Provider value={{ episodeDetails, setEpisode }}>
      <Router>
        <Routes>
          <Route path="/" element={<ShowPage />} />
          <Route path="/EpisodePage" element={<EpisodePage />} />
          <Route path="*" element={<ShowPage />} />
        </Routes>
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;
