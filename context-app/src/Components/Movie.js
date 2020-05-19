import React, { useState, useContext } from 'react'
import { MovieContext } from '../MovieContext'

const Movie = () => {
    const [movies, setMovies] = useContext(MovieContext)

    console.log(movies)
    return (
        <div>
            Title:
            {movies[0].title}
        </div>
    )
}

export default Movie
