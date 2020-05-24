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
            state = { todos: [...state.todos, action.payload] }
            return state
        }
        case 'TOGGLE': {
            /*  state.todos = state.todos.map(todo => {
                 if (todo.id === action.payload) {
                     console.log(todo, !todo.completed)
                     return {
                         ...todo,
                         completed: !todo.completed
                     }
                 }
             }) */
            return state
        }
        default:
            return state
    }
}

export default TodosReducer
