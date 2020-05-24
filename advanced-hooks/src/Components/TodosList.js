import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

export default function TodosList() {
    //Pull out todo from state.todos
    const { dispatch, todos } = useContext(GlobalContext)

    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <input type="checkbox" checked={todo.completed} onChange={() => dispatch({ type: 'TOGGLE', payload: todo.id })} />
                    {todo.text}
                </div>
            ))}
        </div>
    )
}
