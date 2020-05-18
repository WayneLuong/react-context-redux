import React, { useState } from 'react';
import MovieFunc from './Components/MovieFunc'
import MovieClass from './Components/MovieClass'
import './App.css';

function App() {

  const [movies, setMovies] = useState([
    { id: 1, title: "Movie 1", btnText: "click me 1" },
    { id: 2, title: "Movie 2", btnText: "click me 2" },
    { id: 3, title: "Movie 3", btnText: "click me 3" }
  ])

  //Handle state change from prop
  const handleSubmit = (name) => {
    console.log(name)
  }

  return (
    <div className="App">
      {/* <MovieFunc title='Movie 1' btnText='click me 1' />
      <MovieFunc title='Movie 2' btnText='click me 2' />
      <MovieFunc title='Movie 3' btnText='click me 3' /> */}

      <h1>Functional Components</h1>
      {movies.map((movie) => (
        <MovieFunc key={movie.id} id={movie.id} title={movie.title} btnText={(movie.btnText)} handleSubmit={handleSubmit} drill={movies} />
      ))}

      <h1>Class Components</h1>
      {movies.map((movie) => (
        <MovieClass key={movie.id} id={movie.id} title={movie.title} btnText={(movie.btnText)} handleSubmit={handleSubmit} drill={movies} />
      ))}
    </div>
  );
}

export default App;
