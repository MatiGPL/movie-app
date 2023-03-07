import React from 'react'
import { useParams } from 'react-router-dom'
import { useMoviesData } from '../../../hooks/useMoviesData';
import * as Styled from './styles';
import { AiFillStar } from 'react-icons/ai';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';

const MoviePage = () => {
  const params = useParams();
  const {movies:movie,loading,error}= useMoviesData(`movie/${params.id}`);
  if(!movie)return
  
  return (
    <MainTemplate>
    <Styled.Container>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
      <Styled.ContainerRight>
      <h1>{movie.original_title}</h1>
      <h2>{movie.tagline}</h2>
      <article>{movie.overview}</article>
      <Styled.ContainerRightBottom>
        <p>Vote Average {movie.vote_average} <AiFillStar/></p>
        <p>Votes: {movie.vote_count}</p>
        <p>Release Date: {movie.release_date}</p>
      </Styled.ContainerRightBottom>
      </Styled.ContainerRight>
    </Styled.Container>
    </MainTemplate>
  )
}

export default MoviePage