import React, { useContext } from 'react'
import { MovieContext } from '../MovieContext'
import Delete from './actions/Delete'
import Edit from './actions/Edit'
//import { DramaContext } from '../DramaContext'

const Movie = () => {
    //use of multiple context
    const [movies, setMovies] = useContext(MovieContext)
    //const [dramas, setDramas] = useContext(DramaContext)

    console.log('movies: ', movies)
    //console.log('dramas: ', dramas)
    return (
        <>
            <h1>Movies</h1>
            {movies.map(movie => (
                <div key={movie.id}>
                    Title: {movie.title} : {movie.btnText}
                    <Delete recordToDelete={movie} />
                    <Edit recordToEdit={movie} />
                </div>
            ))}
        </>
    )
}

export default Movie
