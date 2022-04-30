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
              summary: information.summary.replace(/<\/?[^>]+(>|$)/g, ""),
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
      <article className="episodes-grid">
        {listEpisodes &&
          listEpisodes.map((episode) => {
            return (
              <section
                className="details-align"
                onClick={() => {
                  setEpisodeDetailsAndChangePage(episode);
                }}
              >
                <span>
                  <p>Season:</p>
                  <p>{episode.episodeSeason}</p>
                </span>
                <span>
                  <p>Name:</p>
                  <p>{episode.episodeName}</p>
                </span>
                <span>
                  <p>Number:</p>
                  <p>{episode.episodeNumber}</p>
                </span>
              </section>
            );
          })}
      </article>
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

  .details-align {
    //background-color: #f6c7ee;
    text-align: center;
    display: grid;
    grid-template-columns: 0.75fr 1fr 0.75fr;
    margin: 1.5rem 10 1.5rem 0;
    padding: 0.5rem;
  }

  .details-align:hover {
    color: red;
    background-color: #a1a1a1;
    //filter: brightness(105%);
  }
`;

export default EpisodeList;
