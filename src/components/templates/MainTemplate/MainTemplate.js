import React, { useState } from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import { ThemeProvider } from 'styled-components';
import light from '../../themes/light';
import dark from '../../themes/dark';
import * as Styled from './styles'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import ButtonNew from '../../ButtonMode/ButtonNew';

const MainTemplate = ({children}) => {

  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(
    stored === "true" ? true : false
  );

  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <Styled.Container>
      <Header/>
      <ButtonNew onClick={() => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("isDarkMode", !isDarkMode);
      }}>{isDarkMode ? <MdLightMode/> : <MdDarkMode/>}</ButtonNew>
      {children}
      <Footer/>
      </Styled.Container>
    </ThemeProvider>
  )
}

export default MainTemplate
