import { ShowTv } from "../Types/ShowType";
import EpisodeList from "./EpisodeList";
import styled from "styled-components";
import { AiFillStar, AiFillClockCircle } from "react-icons/ai";
import { BiRss } from "react-icons/bi";

const TvShow = (props: ShowTv) => {
  return (
    <ShowtTvShow>
      <section>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <img src={props.coverImage} alt="Powerpuff girl" />
      </section>
      <section className="details-align">
        <span>
          <AiFillClockCircle className="icons" />
          <p>{props.airingTime}</p>
        </span>
        <span>
          <BiRss className="icons" />
          <p>Show Ended at {props.tvshowend}</p>
        </span>
        <span>
          <AiFillStar className="icons" />
          <p>{props.ratingSerie}</p>
        </span>
      </section>
      <section>
        <h2>Episodes</h2>
        <EpisodeList />
      </section>
    </ShowtTvShow>
  );
};

const ShowtTvShow = styled.article`
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
    padding-bottom: 4rem;
    color: #ffe8fb;
  }

  h2 {
    font-size: 3rem;
    font-weight: 400;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-shadow: 1px 1px 2px #970167;
    text-align: center;
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 1rem;
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
    padding-bottom: 1rem;
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
  }
`;

export default TvShow;
