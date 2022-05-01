import axios from "axios";
import TvShow from "../components/tvShow/TvShow";
import { useEffect, useState } from "react";
import { ShowTv } from "../Types/ShowType";

/* A way to hide the url of the api. */
const url = process.env.REACT_APP_BACKEND_URL;

/**
 * It's a function that returns a component that takes in a tvShow object and displays it.
 * @returns The ShowPage component is being returned.
 */
const ShowPage = () => {
  const [tvShow, setTvShow] = useState<ShowTv>();

  useEffect(() => {
    const fetchTvShow = async () => {
      await axios({
        method: "GET",
        url: url + "/lookup/shows?thetvdb=76200",
      }).then((response) => {
        setTvShow({
          title: response.data.name,
          description: response.data.summary.replace(/<\/?[^>]+(>|$)/g, ""),
          airingTime: response.data.airingTime,
          premiered: response.data.premiered,
          coverImage: response.data.image.original,
          tvshowend: response.data.ended,
          ratingSerie: response.data.rating.average,
        });
      });
    };
    fetchTvShow();
  }, []);

  return <TvShow {...tvShow}></TvShow>;
};

export default ShowPage;
