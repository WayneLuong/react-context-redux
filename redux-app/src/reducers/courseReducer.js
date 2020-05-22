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
        default:
            return state
    }
}

export default courseReducer