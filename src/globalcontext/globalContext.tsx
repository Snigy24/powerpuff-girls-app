import { createContext, useContext } from "react";
import { EpisodeDetails } from "../Types/ListEpisodeType";

/**
 * GlobalContent is an object with two properties: episodeDetails and setEpisode. episodeDetails is an
 * EpisodeDetails object, and setEpisode is a function.
 * @property {EpisodeDetails} episodeDetails - EpisodeDetails;
 * @property {Function} setEpisode - Function;
 */
export type GlobalContent = {
  episodeDetails: EpisodeDetails;
  setEpisode: Function;
};

/* Creating a context object with the default values of the properties. */
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

/**
 * UseGlobalContext() is a function that returns the useContext() hook, which is passed the
 * GlobalContext object.
 * @returns The useContext hook is being used to return the GlobalContext.
 */
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
