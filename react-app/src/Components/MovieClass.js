import React, { Component } from 'react'

//Class Component
class MovieClass extends Component {
    render() {
        const { title, btnText } = this.props

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
}

export default MovieClass
