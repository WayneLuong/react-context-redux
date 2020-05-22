const isLoggedReducer = (state = true, action) => {
    switch (action.type) {
        case 'LOGGED_IN':
            return !state
        default:
            return state
    }
}

export default isLoggedReducer