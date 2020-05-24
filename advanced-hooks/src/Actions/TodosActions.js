export function addTodo(todo) {
    dispatch({
        type: 'ADD_TODO',
        payload: todo
    });
}