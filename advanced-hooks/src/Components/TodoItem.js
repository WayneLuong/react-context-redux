import React, { useContext, useState, useEffect, useRef } from 'react'
import { GlobalContext } from '../Context/GlobalState'

export default function TodoItem(props) {

    const { todo } = props
    const [text, setText] = useState(todo.text)
    const { dispatch } = useContext(GlobalContext)
    const firstUpdate = useRef(true);

    const handleChange = e => {
        setText(e.target.value)
    }

    //Fires action once state has been updated (fixes state update delay)
    useEffect(() => {
        if (!firstUpdate.current) {
            const updatedTodo = { id: todo.id, text, completed: todo.completed }
            dispatch({ type: 'EDIT_TODO', payload: updatedTodo })
        } else {
            firstUpdate.current = false
        }
    }, [text, dispatch, todo.completed, todo.id])

    return (
        <div>
            <input type="checkbox" checked={todo.completed} onChange={() => dispatch({ type: 'TOGGLE', payload: todo.id })} />
            <input type="text" value={text} onChange={handleChange} />
            <input type="button" value='Delete' onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })} />
        </div>
    )
}
