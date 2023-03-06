import React, {useEffect} from 'react';
import * as Styled from './styles'
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';


const FeaturedMovieCard = ({featured}) => {
 
if(!featured) return; // zabezpieczenie przed wysyłaniem pustych danych

  return (
    
    <Styled.Wrapper>
    <Link to={`../movie/${featured.id}`}>
      <img src={`https://image.tmdb.org/t/p/w500/${featured.poster_path}`} alt={featured.title}/>
      </Link>
      <Styled.WrapperDescr>
      <Link to={`../movie/${featured.id}`}><h2>{featured.title}</h2></Link>
        <article>{featured.overview}</article>
        <Styled.WrapperDescrBottom>
        <span>Release date: {featured.release_date}</span>
        <span>Rating: {featured.vote_average} <AiFillStar/></span>
        </Styled.WrapperDescrBottom>
      </Styled.WrapperDescr>
  </Styled.Wrapper>
  
  )
}

export default FeaturedMovieCard