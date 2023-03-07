import React, { useEffect, useState } from "react";
import MovieCard from "../../Movies/MovieCard/MovieCard";
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import * as Styled from "./styles";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [results, setResults] = useState("0");
 

  useEffect(() => {
    let debounce = null;
    debounce = setTimeout(() => getData(), 2000);
    return () => clearInterval(debounce);
  }, [query]);

  const getData = async () => {
    const key = process.env.REACT_APP_API_KEY;
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`
    );
    const data = await res.json();
    setMovies(data.results);
    setResults(data.total_results);
  };


  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <MainTemplate>
    <Styled.Container>
      <Styled.Header>
        <h2>Search movie </h2>
        <input
          value={query}
          onChange={handleChange}
          placeholder="Write the title"
        />
        </Styled.Header>
        {results > 0 ? (
          <h2>Found: {results} {results === 1 ? "movie" : "movies"}</h2>
          ) : (
            <h2>Movie not found</h2>
            )}
      <Styled.Results>
        {!movies.length ? (
          null
        ) : (
          movies.map((movie) => (
            <p key={movie.id}><MovieCard movie={movie}/>
            </p>
          ))
        )}
      </Styled.Results>
    </Styled.Container>
  
    </MainTemplate>
  );
};

export default SearchPage;
