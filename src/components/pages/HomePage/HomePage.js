import React, { useEffect, useState } from 'react';
import { useMoviesData } from "../../../hooks/useMoviesData";
import Header from '../../Header/Header';
import FeaturedMovieCard from '../../Movies/FeaturedMovieCard/FeaturedMovieCard';
import Movies from '../../Movies/Movies/Movies';

const HomePage = (isTVShow) => {

  const {movies:popular,loading,error} = useMoviesData("movie/popular");
  const {movies:top} = useMoviesData("movie/top_rated");
  const {movies:upcoming} = useMoviesData("movie/upcoming");
  const [featured, setFeatured] = useState();
  const {movies:popularTV} = useMoviesData("tv/popular");
  const {movies:topTV} = useMoviesData("tv/top_rated");

  useEffect(() => {
    if(featured) return;
    featuredMovie();
  },[popular])

  const featuredMovie = () => {
    if(!popular?.results) return
    const result = Math.floor(Math.random()*popular.results.length);
    if(popular.length<1) return;
    setFeatured(popular.results[result]);
  } 
 
  return (
    <div>
      <Header/>
        <Movies title="Popular Movies" movies={popular?.results}/>
        {featured ? <FeaturedMovieCard title="Featured" featured={featured}/> : <p>Loading</p>} 
        <Movies title="Top Rated Movies" movies={top?.results}/>
        <Movies title="Upcoming Movies" movies={upcoming?.results}/>
      
    </div>
  )
}

export default HomePage