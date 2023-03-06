import styled from "styled-components";

export const Container = styled.div`
  max-width: 1600px;
  margin: 50px auto;
  width: 95%;
  color: white;
  display: flex;
  flex-direction: row;
  
  img {
    display: flex;
    border-radius: 50px;
    width: 40%;
    object-fit: cover;
    min-width: 300px;
    box-shadow: -10px 10px 30px grey;
  }
`
export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid white; */
  width: 80%;
  padding: 0 30px;
  
  h1 {
    display: flex;
    text-decoration: underline;
    text-transform: uppercase;
    height: auto;
  }
  article {
    display: flex;
    line-height: 3rem;
    text-align: justify;
    text-indent: 1.5em;
    /* border: 1px solid yellow; */
    height: 80%;
  }
  p, a {
    color: inherit;
    font-weight: 700;
    text-decoration: underline;
  }
`
export const ContainerRightBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  
  height: 10%;
  /* border: 1px solid green; */
  justify-self: flex-end;

  p {
    color: inherit;
    font-weight: inherit;
    text-decoration: none;
  }
  

  svg {
    scale: 1.2;
  }
`