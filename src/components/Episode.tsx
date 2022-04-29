import React from "react";
import { EpisodeDetails } from "../Types/ListEpisodeType";

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
