const courseReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COURSE':
            return [...state, ...action.payload]
        default:
            return state
    }
}

export default courseReducer