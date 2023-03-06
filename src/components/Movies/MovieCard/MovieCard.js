import React from 'react';
import * as Styled from './styles'
import { Link } from 'react-router-dom';

const MovieCard = ({movie, isTVShow}) => {
  
  return (
    <Link style={{textDecoration:"none"}} to={isTVShow ? (`../TVShow/${movie.id}`) : (`../movie/${movie.id}`)}>
    <Styled.Wrapper>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={isTVShow ? movie.name : movie.title }/>
      <h3>{isTVShow ? movie.name : movie.title}</h3>
      <Styled.BoxRelease>
        <span>Release Date: {isTVShow ? movie.first_air_date : movie.release_date}</span>
      </Styled.BoxRelease>
      <Styled.BoxRating>
        <span>Rating: {movie.vote_average}</span>
      </Styled.BoxRating>
    </Styled.Wrapper>
    </Link>
  )
}

export default MovieCard