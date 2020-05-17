import React, { useState } from 'react'

//Functional Component
function MovieFunc(props) {
    const { id, title, btnText } = props

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
            <p>{title}</p>
            <button onClick={updateButton}>{state}</button>
            <input type="text" name='name' onChange={updateName} />
            onChange: {name}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default MovieFunc;
