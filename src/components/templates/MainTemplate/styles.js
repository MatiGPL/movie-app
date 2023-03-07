import styled from "styled-components";

export const Container = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textColor};
  margin: 0px!important;
  padding: 0px!important;
  @media (max-width: 1000px) {
    margin-bottom: 30px;
    padding-top: 10px;
  }

`

