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
          description: response.data.summary.replace(/<\/?[^>]+(>|$)/g, ""),
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

// const ShowListEpisodes = styled.article`
//   @media screen and (min-width: 1500px) {
//     .episodes-grid {
//       display: grid;
//       grid-template-columns: repeat(3, 1fr);
//     }
//   }

//   @media screen and (min-width: 1024px) and (max-width: 1500px) {
//     .episodes-grid {
//       display: grid;
//       grid-template-columns: repeat(2, 1fr);
//     }
//   }

//   @media screen and (max-width: 1024px) {
//     .episodes-grid {
//       display: grid;
//       grid-template-columns: repeat(1, 1fr);
//     }
//   }

//   #resp-table {
//     width: 100%;
//     display: table;
//   }
// `;

export default ShowPage;
