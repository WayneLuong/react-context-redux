//Multiple actions in one file
export const increment = (val = 1) => { //Sets default value for arg if nothing is passed
    return {
        type: 'INCREMENT',
        payload: val
    }
}

export const decrement = (val = 1) => {
    return {
        type: 'DECREMENT',
        payload: val
    }
}