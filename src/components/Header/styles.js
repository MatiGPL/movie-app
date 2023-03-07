import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 1600px;
  margin: 0px auto;
  width: 95%;
  position: sticky;
  top: 10px;
  overflow: hidden;
  z-index: 2;
  @media (max-width: 1000px) {
    position: fixed;
    top:50%;
    transform: translate(0, -60%);
    width: 170px;
    left:-160px;
    transition: 0.5s;
    :hover {
      left:0px;
      transition: 0.5s;
    }
  }
  
`
export const Items = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 20px;
  top: 0;
`
export const Item = styled.li`
  float: left;
  @media (max-width: 1000px) {
    float: none !important;
  }
`
export const NavLink = styled(Link)`
  display: block;
  text-align: center;
  padding: 20px 40px;
  font-size: 1.5rem;
  font-weight: bold;
  transition: 0.7s;
  color: ${props => props.theme.colors.textColor};
  @media (max-width: 1000px) {
    padding: 10px 5px;
  }
  
  cursor: pointer;
    :hover {
      background-color: black;
      color: white;
      text-decoration: underline;
      
    }
`
export const Logo = styled.a`
  display: block;
  text-align: center;
  padding: 20px 40px;
  font-size: 1.5rem;
  font-weight: bold;
    svg {
     scale: 2;
     color: ${props => props.theme.colors.textColor};
    }
`

