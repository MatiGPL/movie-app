import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import MoviePage from './components/pages/MoviePage/MoviePage';
import SearchPage from './components/pages/SearchPage/SearchPage';
import TVShowsPage from './components/pages/TVShowsPage/TVShowsPage';
import TVShowPage from './components/pages/TVShowPage/TVShowPage'


const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={<HomePage/>}/>
          <Route path='/movie/:id' element={<MoviePage/>}/>
          <Route path='/TVShow/:id' element={<TVShowPage/>}/>
          <Route path='/TVShows' element={<TVShowsPage isTVShow/>}/>
          <Route path='/Search' element={<SearchPage/>}/>
        </Routes>
      </BrowserRouter>
   
  )
}
//01:15:00
export default App
