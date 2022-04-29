import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ShowPage from "./pages/ShowPage";
import EpisodePage from "./pages/EpisodePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalContext } from "./globalcontext/globalContext";
import { EpisodeDetails } from "./Types/ListEpisodeType";

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
