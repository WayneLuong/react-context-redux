import React from 'react';
import Movie from './Components/Movie'
import { MovieProvider } from './MovieContext'
import './App.css';

const App = () => {
  return (
    <MovieProvider>
      <div className="App">
        <Movie />
      </div>
    </MovieProvider>
  );
}

export default App;
