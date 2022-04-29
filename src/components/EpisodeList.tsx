import axios from "axios";
import React, { useEffect, useState } from "react";
import { EpisodeContent } from "../Types/EpisodeType";
import styled from "styled-components";

const url = process.env.REACT_APP_BACKEND_URL;

const EpisodeList = () => {
  const [listEpisodes, setListEpisodes] = useState<EpisodeContent[]>([]);
  useEffect(() => {
    const fetchEpisodes = async () => {
      await axios({
        method: "GET",
        url: url + "/shows/1955/episodes",
      }).then((response) => {
        setListEpisodes(
          response.data.map((information: any) => {
            const episodes: EpisodeContent = {
              season: information.season,
              episodeNumber: information.number,
              episodeName: information.name,
            };
            return episodes;
          })
        );
      });
    };
    fetchEpisodes();
  }, []);

  return (
    <ShowListEpisodes>
      <section className="episodes-grid">
        {listEpisodes &&
          listEpisodes.map((episode) => {
            return (
              <div>
                <p>Season: {episode.season}</p>
                <p>Episode Name: {episode.episodeName}</p>
                <p>Episode Number: {episode.episodeNumber}</p>
              </div>
            );
          })}
      </section>
    </ShowListEpisodes>
  );
};

const ShowListEpisodes = styled.article`
  @media screen and (min-width: 1500px) {
    .episodes-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1500px) {
    .episodes-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 1024px) {
    .episodes-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default EpisodeList;
