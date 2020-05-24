//------------------State------------------
export const todosState = [
    { id: 1, text: 'todo 1', completed: false },
    { id: 2, text: 'todo 2', completed: true },
    { id: 3, text: 'todo 3', completed: false }
]

//------------------Actions------------------
const TodosReducer = (state, action) => {
    switch (action.type) {
        case 'reset': {
            return action.payload
        }
        case 'ADD_TODO': {
            return { todos: [...state.todos, action.payload] }
        }
        case 'DELETE_TODO': {
            return { todos: state.todos.filter(todo => todo.id !== action.payload) }
        }
        case 'EDIT_TODO': {
            return {
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) { todo = action.payload }
                    return todo
                })
            }
        }
        case 'TOGGLE': {
            return {
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) { todo.completed = !todo.completed }
                    return todo
                })
            }
        }
        default:
            return state
    }
}

export default TodosReducer
