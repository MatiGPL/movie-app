import styled from "styled-components";


export const Container = styled.div`
  max-width: 1600px;
  margin: 0px auto;
  width: 95%;
  display: flex;
  flex-direction:column;
  
  background: ${props => props.theme.colors.cardBackground};
  color: ${props => props.theme.colors.textColor};
  border-radius: 20px;
  `
export const ContainerTop = styled.div`
  /* color: grey; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const Items = styled.ul`
  text-align: center;
  list-style-type: none;
  text-decoration: underline;
  padding: 0;
  li {
    text-decoration: none;
    padding: 5px 0;
    font-size: 1.2rem;
  }

  li:first-child {
    font-size: 1.3rem;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    text-decoration: none;
    color:inherit;
  }
  svg {
    padding: 0 5px;
    font-size: 1.5rem;
  }
`

export const ConatinerBottom = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  /* color: grey; */
  padding: 10px 20px;
  a {
    text-decoration: none;
    text-decoration: none;
    color:inherit;
  }
  svg {
    padding: 0 5px;
    font-size: 1.2rem;
  }
`