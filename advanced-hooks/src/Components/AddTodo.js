import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const AddTodo = () => {

    const [text, setText] = useState('')
    const { dispatch } = useContext(GlobalContext)

    const updateText = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = { id: Math.random(), text: text, completed: false }

        dispatch({ type: 'ADD_TODO', payload: newTodo })
    }

    return (
        <div>
            <h1>Add To Do</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={updateText} value={text} />
                <input type="submit" value='Add' />
            </form>
        </div>
    )
}

export default AddTodo
