import React, { useState, useContext } from 'react'
import { MovieContext } from '../../MovieContext'

const Add = (props) => {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [movies, setMovies] = useContext(MovieContext)

    const setTitleField = (e) => {
        setTitle(e.target.value)
    }
    const setTextField = (e) => {
        setText(e.target.value)
    }

    const addMovie = (e) => {
        e.preventDefault()
        const newMovie = {
            id: movies.length > 0 ? movies[movies.length - 1].id + 1 : 1,
            title: title,
            btnText: text
        }

        setMovies(prevMovies => [...prevMovies, newMovie])
        //setMovies([...movies, { id: 'test' }])
    }

    return (
        <form onSubmit={addMovie}>
            <input type="text" placeholder='Title' value={title} onChange={setTitleField} />
            <input type="text" placeholder='Text' value={text} onChange={setTextField} />
            <button>
                Add new movie
            </button>
        </form>

    )
}

export default Add