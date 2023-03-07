import styled from "styled-components"

export const Button = styled.button`
  position: fixed;
    bottom: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
    z-index: 2;
    background: ${props => props.theme.colors.buttonBackground};
    color: ${props => props.theme.colors.buttonText};
    border: none;
    border-radius: 25px;
    & svg {
      font-size: 1.5rem;
    }
    `