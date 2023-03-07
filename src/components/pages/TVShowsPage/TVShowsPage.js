import React from "react";
import { useMoviesData } from "../../../hooks/useMoviesData";
import Movies from "../../Movies/Movies/Movies";
import MainTemplate from '../../templates/MainTemplate/MainTemplate';

const TVShowsPage = ({isTVShow}) => {
  const { movies: popularTV, loading, error } = useMoviesData("tv/popular");
  const { movies: topTV } = useMoviesData("tv/top_rated");

  return (
    <MainTemplate>
      <Movies isTVShow={isTVShow} title="Popular TV Series" movies={popularTV?.results} />
      <Movies isTVShow={isTVShow} title="Top Rated TV series" movies={topTV?.results} />
    </MainTemplate>
  );
};

export default TVShowsPage;
