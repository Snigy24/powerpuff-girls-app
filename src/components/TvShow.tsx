import { ShowTv } from "../Types/ShowType";
import EpisodeList from "./EpisodeList";

const TvShow = (props: ShowTv) => {
  return (
    <>
      <h1>{props.title}</h1>
      <div>{props.description}</div>
      <div>{props.airingTime}</div>
      <img src={props.coverImage} alt="Powerpuff girl" />
      <div>{props.tvshowend}</div>
      <div>{props.ratingSerie}</div>
      <EpisodeList />
    </>
  );
};

export default TvShow;
