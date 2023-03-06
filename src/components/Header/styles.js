import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 1600px;
  margin: 30px auto;
  width: 95%;
  color: rgb(51,51,51);
  position: sticky;
  top: 10px;
  overflow: hidden;
  z-index: 2;
  

`
export const Items = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(51,51,51);
  border-radius: 20px;
  top: 0;

`
export const Item = styled.li`
  float: left;
`
export const NavLink = styled(Link)`
  display: block;
  text-align: center;
  padding: 20px 40px;
  font-size: 1.5rem;
  font-weight: bold;
  transition: 0.7s;
  color: grey;
  
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
     color: grey;
    }
`