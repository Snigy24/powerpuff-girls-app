import React, { useEffect, useState } from "react";
import TvShow from "../components/TvShow";
import { ShowTv } from "../Types/ShowType";
import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL;

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
          description: response.data.summary,
          airingTime: response.data.airingTime,
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
