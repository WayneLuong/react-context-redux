const initialState = [
    {
        id: 1,
        name: 'React',
        description: 'some description 1',
    },
    {
        id: 2,
        name: 'Context',
        description: 'some description 2',
    },
    {
        id: 3,
        name: 'Redux',
        description: 'some description 3',
    }
]

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COURSE':
            return [...state, action.payload]
        case 'DELETE_COURSE':
            return state.filter(course => { course.id !== action.payload })
        case 'EDIT_COURSE':
            return state.map(course => { course.id === action.payload.id ? (course = action.payload) : course })
        default:
            return state
    }
}

export default courseReducer