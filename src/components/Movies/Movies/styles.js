import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 1600px;
  margin: 0px auto;
  width: 95%;
  `

  export const Title = styled.h2`
  display: inline-block;
  color: ${props => props.theme.colors.textColor};
  font-size: 2rem;
  border-bottom: 4px solid ${props => props.theme.colors.textColor};
  width: auto;
  `