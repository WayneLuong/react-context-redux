//Method 1
import React, { useState, createContext } from 'react'

//Create Context
export const MovieContext = createContext()

//Create Provider
export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        { id: 1, title: "Movie 1", btnText: "click me 1" },
        { id: 2, title: "Movie 2", btnText: "click me 2" },
        { id: 3, title: "Movie 3", btnText: "click me 3" }
    ])

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}
