import React, { useState } from 'react'
import StateDrill from './StateDrill'

//Functional Component
function MovieFunc(props) {
    const { id, title, btnText, drill } = props

    //Creating and setting state
    const [state, setState] = useState(btnText) //Takes in a value for the initial state e.g. state = btnText
    const [name, setName] = useState('')
    const [movie, setMovie] = useState({ id, title, btnText }) //Local movie state

    //Props passed in function
    const updateButton = () => {
        setState(prevState => prevState + ' updated')
        console.log(btnText, state) //props, state
    }
    //onChange
    const updateName = (e) => {
        setName(e.target.value)
    }
    //Passing prop up to state
    const handleSubmit = (e) => {
        setMovie({ id, title, btnText: name })
        props.handleSubmit(movie)
    }

    return (
        <div>
            <b>{title}</b>
            <button onClick={updateButton}>{state}</button>
            <input type="text" name='name' onChange={updateName} />
            onChange: {name}
            <button onClick={handleSubmit}>Submit</button>
            <StateDrill drill2={drill} />{/* Passing state down 2 levels */}
        </div>
    )
}

export default MovieFunc;
