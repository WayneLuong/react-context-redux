import React from 'react'

//Functional Component
function MovieFunc(props) {
    const { title, btnText } = props

    //Props passed in function
    const sayHello = () => {
        console.log(btnText)
    }

    return (
        <div>
            <p>{title}</p>
            <button onClick={sayHello}>{btnText}</button>
        </div>
    )
}

export default MovieFunc;
