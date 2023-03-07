import styled from "styled-components"

export const Wrapper = styled.div`
  max-width: 1600px;
  margin: 30px auto;
  width: 70%;
  color: ${props => props.theme.colors.textColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  /* border: 1px solid white; */
  
  a {
    text-decoration: none;
    color: inherit;
    width: 60%;
  }

  img {
    display: flex;
    border-radius: 20px;
    /* border: 1px solid yellow; */
    width: 100%;
    min-width: 300px;
  }
`
export const WrapperDescr = styled.div`
  
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  width: 100%;
  

  a {
    text-decoration: underline;
    color: inherit;
    width: 100%;
    padding-bottom:20px;
    height: auto;
  }

  h2 {
    padding: 0 20px;
    margin: 0;
    font-size: 2rem;
    display: flex;
  }
   article {
    padding: 0 20px;
    padding-bottom: 20px;
    font-size: 1rem;
    display: flex;
    line-height: 2em;
    
    height: 80%;
  }
`

export const WrapperDescrBottom = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-end;
padding: 0 20px;
height: 10%;


& svg {
  scale:1.2;

}
/* border: 1px solid green; */
`