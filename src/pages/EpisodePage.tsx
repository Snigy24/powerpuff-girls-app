import { useGlobalContext } from "../globalcontext/globalContext";

const EpisodePage = () => {
  const { episodeDetails } = useGlobalContext();

  return (
    <div>
      <p>{episodeDetails.episodeName}</p>
      <img src={episodeDetails.coverImage} alt="Powerpuff girl" />
      <p>{episodeDetails.summary}</p>
      <p>{episodeDetails.releaseDate}</p>
      <p>{episodeDetails.episodeNumber}</p>
      <p>{episodeDetails.episodeSeason}</p>
    </div>
  );
};

export default EpisodePage;
