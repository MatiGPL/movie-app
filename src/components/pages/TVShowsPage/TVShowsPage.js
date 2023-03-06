import React from "react";
import { useMoviesData } from "../../../hooks/useMoviesData";
import Header from "../../Header/Header";
import Movies from "../../Movies/Movies/Movies";

const TVShowsPage = ({isTVShow}) => {
  const { movies: popularTV, loading, error } = useMoviesData("tv/popular");
  const { movies: topTV } = useMoviesData("tv/top_rated");

  return (
    <div>
      <Header/>
      <Movies isTVShow={isTVShow} title="Popular TV Series" movies={popularTV?.results} />
      <Movies isTVShow={isTVShow} title="Top Rated TV series" movies={topTV?.results} />
    </div>
  );
};

export default TVShowsPage;
