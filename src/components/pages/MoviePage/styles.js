import styled from "styled-components";

export const Container = styled.div`
  max-width: 1600px;
  margin: 0px auto;
  padding: 30px 0;
  width: 95%;
  color: ${props => props.theme.colors.textColor};
  display: flex;
  flex-direction: row;
  min-height: auto;
  
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
`
export const ContainerRightBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  
  height: 10%;
  /* border: 1px solid green; */
  justify-self: flex-end;

  svg {
    scale: 1.2;
  }
`