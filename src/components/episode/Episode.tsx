import { EpisodeDetails } from "../../Types/ListEpisodeType";

/**
 * The function takes in an object of type EpisodeDetails and returns a div with the episodeName,
 * coverImage, summary, and releaseDate.
 * @param {EpisodeDetails} props - EpisodeDetails
 * @returns A React component that displays the episode details.
 */
const Episode = (props: EpisodeDetails) => {
  return (
    <div>
      <p>{props.episodeName}</p>
      <img src={props.coverImage} alt="Powerpuff girl" />
      <p>{props.summary}</p>
      <p>{props.releaseDate}</p>
    </div>
  );
};

export default Episode;
