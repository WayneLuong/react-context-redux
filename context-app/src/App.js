import React from 'react';
import Movie from './Components/Movie'
import Drama from './Components/Drama'
import Add from './Components/actions/Add'
import { MovieProvider } from './MovieContext'
import { DramaProvider } from './DramaContext'
import './App.css';

const App = () => {
  return (
    <MovieProvider>
      <DramaProvider>
        <div className="App">
          <Movie />
          <Drama />
          <Add />
        </div>
      </DramaProvider>
    </MovieProvider>
  );
}

export default App;
