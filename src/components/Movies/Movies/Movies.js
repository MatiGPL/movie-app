import React, { useRef, useState } from "react";
import MovieCard from '../MovieCard/MovieCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import * as Styled from './styles'

SwiperCore.use([Autoplay]);

const Movies = ({movies, title, isTVShow}) => {
  
  return (
    <Styled.Wrapper>
  
    <Styled.Title>{title}</Styled.Title>
    <Swiper 
      className="mySwiper" 
      navigation={true} 
      modules={[Navigation]} 
      autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
      spaceBetween={20} 
      loop={true} 
      slidesPerView={2}
      breakpoints={{
        640: {
          width:640,
          slidesPerView:2
        },
        768: {
          width:768,
          slidesPerView:3
        },
        992: {
          width: 992,
          slidesPerView:3
        },
      }}
    
    >
      {movies?.map((movie) => (
        <SwiperSlide key={movie.id}>
        <MovieCard isTVShow={isTVShow} movie={movie}/>
      </SwiperSlide>))}
    </Swiper>
    </Styled.Wrapper>
    
  )
}

export default Movies