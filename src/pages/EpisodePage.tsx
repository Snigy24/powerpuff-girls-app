import { useGlobalContext } from "../globalcontext/globalContext";
import styled from "styled-components";
import { BsCalendar2Date } from "react-icons/bs";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { FaTicketAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EpisodePage = () => {
  const { episodeDetails } = useGlobalContext();

  const navigate = useNavigate();

  return (
    <ShowtEpisodeDetails>
      <section>
        <h1>{episodeDetails.episodeName}</h1>
      </section>
      <section className="details-align">
        <span>
          <BsCalendar2Date className="icons" />
          <p>{episodeDetails.releaseDate}</p>
        </span>
        <span>
          <AiOutlineFieldNumber className="icons" />
          <p>{episodeDetails.episodeNumber}</p>
        </span>
        <span>
          <FaTicketAlt className="icons" />
          <p>{episodeDetails.episodeSeason}</p>
        </span>
      </section>
      <section>
        <img src={episodeDetails.coverImage} alt="Powerpuff girl" />
        <p>{episodeDetails.summary}</p>
      </section>
      <section className="homepage">
        <p onClick={() => navigate("/")}>Back</p>
      </section>
    </ShowtEpisodeDetails>
  );
};

const ShowtEpisodeDetails = styled.article`
  max-width: 1000px;
  margin: 2rem auto auto auto;
  padding: 1rem;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-shadow: 1px 1px 2px #970167;
    text-align: center;
    width: 100%;
    color: #ffe8fb;
  }

  span {
    display: inline-block;
    grid-template-columns: 0.1fr 2fr 0.7fr;
    margin: 0.5rem 0 0.5rem 0;
    font-size: 1rem;
    color: #482f01;
    text-shadow: 1px 1px 2px brown;
  }

  img {
    border: 3px solid #482f01;
    padding: 5px;
    display: block;
    margin: 3rem auto;
    width: auto;
  }

  p {
    border-top: 2px solid #a877a0;
    font-size: 1.2rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    line-height: 2rem;
    text-align: center;
    color: black;
    font-style: oblique;
    text-shadow: 0.5px 0.5px 1px #ff54e2;
  }

  .details-align {
    text-align: center;
    display: grid;
    grid-template-columns: 0.75fr 1fr 0.75fr;
    margin: 1.5rem 0 1.5rem 0;
  }

  .icons {
    color: #a75f9b;
    font-size: 1.5rem;
    padding-right: 1rem;
  }

  .homepage {
    width: fit-content;
    color: #a75f9b;
    font-size: 2rem;
    display: inline-block;
    padding-left: 50%;
    padding-top: 4rem;
  }

  .homepage:hover {
    cursor: pointer;
  }
`;

export default EpisodePage;
