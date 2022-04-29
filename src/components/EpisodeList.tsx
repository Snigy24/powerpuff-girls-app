import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../globalcontext/globalContext";
import { EpisodeDetails } from "../Types/ListEpisodeType";

const url = process.env.REACT_APP_BACKEND_URL;

const EpisodeList = () => {
  let navigate = useNavigate();
  const [listEpisodes, setListEpisodes] = useState<EpisodeDetails[]>([]);
  useEffect(() => {
    const fetchEpisodes = async () => {
      await axios({
        method: "GET",
        url: url + "/shows/1955/episodes",
      }).then((response) => {
        setListEpisodes(
          response.data.map((information: any) => {
            const episodes: EpisodeDetails = {
              episodeName: information.name,
              coverImage: information.image.original,
              summary: information.summary,
              releaseDate: information.airdate,
              episodeNumber: information.number,
              episodeSeason: information.season,
            };
            return episodes;
          })
        );
      });
    };
    fetchEpisodes();
  }, []);

  const { setEpisode } = useGlobalContext();

  const setEpisodeDetailsAndChangePage = (episode: any) => {
    setEpisode(episode);
    navigate("/EpisodePage");
  };

  return (
    <ShowListEpisodes>
      <section className="episodes-grid">
        {listEpisodes &&
          listEpisodes.map((episode) => {
            return (
              <div
                className="resp-table"
                onClick={() => {
                  setEpisodeDetailsAndChangePage(episode);
                }}
              >
                <span>Season: {episode.episodeSeason}</span>
                <span>Episode Name: {episode.episodeName}</span>
                <span>Episode Number: {episode.episodeNumber}</span>
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

  #resp-table {
    width: 100%;
    display: table;
  }
`;

export default EpisodeList;
