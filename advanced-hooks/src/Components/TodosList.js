import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import TodoItem from './TodoItem'

export default function TodosList() {
    //Pull out todo from state.todos
    const { todos } = useContext(GlobalContext)

    return (
        <div>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    )
}
