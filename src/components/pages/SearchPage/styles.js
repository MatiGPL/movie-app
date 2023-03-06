import styled from "styled-components";

export const Container = styled.div`
  max-width: 1600px;
  margin: 30px auto;
  width: 95%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: white;
  /* border: 1px solid white; */
  & > h2 {
    display: block;
    text-align: center;
    justify-content: center;
    
  }
`
export const Header = styled.div`
display: flex;
align-items: center;
justify-content: center;
/* border: 1px solid yellowgreen; */


& > input {
    display: block;
    width: auto;
    height: 2rem;
    margin: 20px 10px;
    background-color: grey;
    border: none;
    border-radius: 16px;
    text-align: center;
    
    font-size: 1.2rem;
    color: white;
}
input::placeholder {
    color: white;
}
`
export const Results = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px 0;
  text-align: center;
  & > p {
    margin: 0 20px;
    width: 20%;
    min-width: 200px;
  
    font-size: 2rem;
  }


  `