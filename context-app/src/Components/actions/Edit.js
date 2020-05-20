import React, { useContext, useState } from 'react'
import { MovieContext } from '../../MovieContext'

const Edit = ({ recordToEdit }) => {
    const [movies, setMovies] = useContext(MovieContext)
    const [title, setTitle] = useState(recordToEdit.title)
    const [text, setText] = useState(recordToEdit.btnText)

    //Styling
    const toggleForm = () => {
        let form = document.querySelector(`.form-${recordToEdit.id}`)
        form.classList.toggle('active')
    }

    //Edit Fields
    const updateTitle = (e) => {
        setTitle(e.target.value)
    }
    const updateText = (e) => {
        setText(e.target.value)
    }
    const handleEdit = (e) => {
        e.preventDefault()
        //Set update fields and movies
        const updatedMovie = { id: recordToEdit.id, title, btnText: text }
        const updatedState = movies.map(movie => {
            if (movie.id === updatedMovie.id) {
                return updatedMovie
            } else {
                return movie
            }
        })
        console.log(updatedState)

        setMovies(updatedState)
        toggleForm()
    }

    return (
        <>
            <form onSubmit={handleEdit} className={'editForm ' + 'form-' + recordToEdit.id}>
                <input type="text" value={title} onChange={updateTitle} />
                <input type="text" value={text} onChange={updateText} />
                <input type="hidden" value={recordToEdit.id} />
                <input type="submit" value="Submit" />
            </form>
            <button onClick={toggleForm}>
                Edit {recordToEdit.id}
            </button>
        </>
    )
}


export default Edit