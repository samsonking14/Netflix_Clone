import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Netflix from './Pages/Netflix'
import Player from './Pages/Player'
import MoviePage from "./Pages/Movies";
import TVShows from "./Pages/TVShows";
import UserListedMovies from './Pages/UserLstedMovies'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="player" element={<Player />} />
          <Route exact path="/tv" element={<TVShows />} />
          <Route exact path="/movies" element={<MoviePage />} />
          <Route exact path="/new" element={<Player />} />
          <Route exact path="/mylist" element={<UserListedMovies />} />
          <Route exact path="/" element={<Netflix />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App