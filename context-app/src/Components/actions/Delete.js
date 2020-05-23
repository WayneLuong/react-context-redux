import React, { useContext, useEffect } from 'react'
import { MovieContext } from '../Context/MovieContext'

const Delete = (props) => {

    //Lifecycle method - runs after a render (ComponentDidMount)
    useEffect(() => {
        console.log('running')
        return () => {
            // Clean up after component gets removed (ComponentWillUnmount)
            console.log('Clean up')
        };
    }, [/* prop.source */]) //Add a conditional for useEffect to fire e.g. specific object prop.source in changes

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