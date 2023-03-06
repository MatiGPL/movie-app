import React from 'react';
import * as Styled from './styles';
import { SiThemoviedatabase } from 'react-icons/si';

const Header = ({isTVShow}) => {
  
  return (
    <Styled.Container>
      <Styled.Items>
        <Styled.Item>
          <Styled.Logo><SiThemoviedatabase/></Styled.Logo>
        </Styled.Item> 
        <Styled.Item>
          <Styled.NavLink>Home</Styled.NavLink>
        </Styled.Item>  
        <Styled.Item>
        <Styled.NavLink to="/">Movies</Styled.NavLink>
        </Styled.Item>
        <Styled.Item>
        <Styled.NavLink to="/TVShows">TV Shows</Styled.NavLink>
        </Styled.Item>
        <Styled.Item>
        <Styled.NavLink to="/Search">Search</Styled.NavLink>
        </Styled.Item>
        <Styled.Item style={{float: 'right'}}>
        <Styled.NavLink>Sign Up</Styled.NavLink>
        </Styled.Item>
      </Styled.Items>
    </Styled.Container>
   
  )
}

export default Header