import styled from "styled-components"

export const Wrapper = styled.article`
  overflow: hidden;
  position: relative;
  
  & > img {
    border-radius: 20px;
    width: 100%;
    object-fit: cover;
  }
  & > h3 {
    display: block;
    margin-top: 0;
    text-align: center;
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
    a:link {
  text-decoration: none;
}

    & span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
        color: white;
    }
  }
`

export const BoxRelease = styled.div`
   position: absolute;
   top: 13px;
   right: 13px;
   background-color: rgba(255, 255, 255, 0.5);
   padding: 8px;
   border-radius: 12px;
   font-weight: 700;
   font-size: 0.8rem;
   color: white;
`
export const BoxRating = styled.div`
   position: absolute;
   bottom: 65px;
   right: 13px;
   background-color: rgba(255, 255, 255, 0.5);
   padding: 8px;
   border-radius: 12px;
   font-weight: 700;
   font-size: 0.8rem;
   color: white;
`