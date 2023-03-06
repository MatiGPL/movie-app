import React from 'react'
import { useParams } from 'react-router-dom'
import { useMoviesData } from '../../../hooks/useMoviesData';
import Header from '../../Header/Header';
import * as Styled from './styles';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MoviePage = ({isTVShow}) => {
  const params = useParams();
  const {movies:movie,loading,error}= useMoviesData(`tv/${params.id}`);
  if(!movie)return
  console.log(movie);
  return (
    <>
    <Header/>
    <Styled.Container>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_name}/>
      <Styled.ContainerRight>
      <h1>{movie.name}</h1>
      <h2>{movie.original_name}</h2>
      <h3>{movie.tagline}</h3>
      
      <article>{movie.overview}</article>
      <Link style={{textDecoration:"none"}} to={movie.homepage}>
      <p>TV Series homepage</p>
      </Link>
      <Styled.ContainerRightBottom>
        <p>Vote Average {movie.vote_average} <AiFillStar/></p>
        <p>Votes: {movie.vote_count}</p>
        <p>Release Date: {movie.first_air_date}</p>
        <p>Last Air date: {movie.last_air_date}</p>
      </Styled.ContainerRightBottom>
      </Styled.ContainerRight>
    </Styled.Container>
    </>
  )
}

export default MoviePage