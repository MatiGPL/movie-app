import React from 'react';
import * as Styled from './styles';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineCopyrightCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Styled.Container>
      <Styled.ContainerTop>
        <Styled.Items>
          <li>RESOURCES</li>
          <li>
          <Link to="https://developers.themoviedb.org/">
          API
          </Link>
          </li>
        </Styled.Items>
        <Styled.Items>
          <li>PAGES</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Movies</Link></li>
          <li><Link to="/TVShows">TV Shows</Link></li>
          <li><Link to="/Search">Search</Link></li>
          <li><Link to="/">Sign Up</Link></li>
        </Styled.Items>
        <Styled.Items>
          <li>SOCIAL</li>
          <li><Link to="https://facebook.com" target="_blank"><AiOutlineFacebook/></Link><Link to="https://instagram.com" target="_blank"><AiOutlineInstagram/></Link></li>
        </Styled.Items>
        </Styled.ContainerTop>
        <Styled.ConatinerBottom>All Rights Reserved 2023 <AiOutlineCopyrightCircle/></Styled.ConatinerBottom>
    </Styled.Container>
  )
}

export default Footer
