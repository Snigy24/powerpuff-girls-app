/**
 * EpisodeDetails is an object with optional properties of type string or number.
 * @property {string | undefined} episodeName - The name of the episode
 * @property {string | undefined} coverImage - The URL of the episode's cover image.
 * @property {string | undefined} summary - The summary of the episode
 * @property {string | undefined} releaseDate - "when the tv show was release"
 * @property {number | undefined} episodeNumber - the number of the episode;
 * @property {number | undefined} episodeSeason - the number of each season
 */
export type EpisodeDetails = {
  episodeName?: string | undefined;
  coverImage?: string | undefined;
  summary?: string | undefined;
  releaseDate?: string | undefined;
  episodeNumber?: number | undefined;
  episodeSeason?: number | undefined;
};
