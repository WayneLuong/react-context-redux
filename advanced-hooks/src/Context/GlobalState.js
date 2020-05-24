import React, { useReducer, createContext, useEffect, useRef } from 'react'
import TodosReducer, { todosState } from './TodosReducer'


//-----------------Initial State - example of multiple objects---------------
const initialState = {
    todos: todosState,
    object2: []
}

//--------------------------Custom made hook---------------------------------
function useEffectOnce(callback) {
    //useRef: contains a mutable object
    const didRun = useRef(false)
    useEffect(() => {
        if (!didRun.current) {
            callback();
            didRun.current = true
        }
    })
}

//--------------------------Exports---------------------------------
export const GlobalContext = createContext(initialState)

export const GlobalProvider = (props) => {

    //useReducer: Similar to useState but dispatches an action
    const [state, dispatch] = useReducer(TodosReducer, initialState)

    //----------------Store to local storage to retain state---------------------
    useEffectOnce(() => {
        const raw = localStorage.getItem('data')
        dispatch({ type: 'reset', payload: JSON.parse(raw) })
    })
    //useEffect: LIFECYCLE METHOD (2nd param - runs only when state changes)
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(state))
    }, [state])
    //------------------------------------------------------------------------------

    return (
        <GlobalContext.Provider value={{
            todos: state.todos,
            dispatch
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

