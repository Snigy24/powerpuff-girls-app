import { createContext, useContext } from "react";
import { EpisodeDetails } from "../Types/ListEpisodeType";

export type GlobalContent = {
  episodeDetails: EpisodeDetails;
  setEpisode: Function;
};

export const GlobalContext = createContext<GlobalContent>({
  episodeDetails: {
    episodeName: "",
    coverImage: "",
    episodeSeason: 0,
    episodeNumber: 0,
    summary: "",
    releaseDate: "",
  },
  setEpisode: () => {},
});

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
