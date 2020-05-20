import React, { useContext } from 'react'
import { MovieContext } from '../../MovieContext'

const Delete = (props) => {

    const { recordToDelete } = props
    const [movies, setMovies] = useContext(MovieContext)

    const handleDelete = (e) => {
        e.preventDefault()

        setMovies(movies.filter(movie => movie.id !== recordToDelete.id))

        console.log('deleted ' + recordToDelete.title)
    }

    return (
        <button onClick={handleDelete}>
            Delete {recordToDelete.id}
        </button>
    )
}

export default Delete