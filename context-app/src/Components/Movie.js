import React, { useState, useContext } from 'react'
import { MovieContext } from '../MovieContext'
//import { DramaContext } from '../DramaContext'

const Movie = () => {
    //use of multiple context
    const [movies, setMovies] = useContext(MovieContext)
    //const [dramas, setDramas] = useContext(DramaContext)

    console.log('movies: ', movies)
    //console.log('dramas: ', dramas)
    return (
        <>
            Title:
            {movies[0].title}
        </>
    )
}

export default Movie
