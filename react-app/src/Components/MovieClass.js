import React, { Component } from 'react'

//Class Component
class MovieClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            btnText: props.btnText,
            name: ''
        }
    }

    render() {
        const { title } = this.props
        const { name } = this.state

        //Props passed in function
        const updateButton = () => {
            this.setState({ btnText: this.state.btnText + ' updated' })
            console.log(this.state)
        }
        //onChange
        const updateName = (e) => {
            this.setState({ name: e.target.value })
        }
        //Passing prop up to state
        const handleSubmit = (e) => {
            this.props.handleSubmit(this.state)
        }

        return (
            <div>
                <p>{title}</p>
                <button onClick={updateButton}>{this.state.btnText}</button>
                <input type="text" name='name' onChange={updateName} />
                onChange: {name}
                <button onClick={handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default MovieClass
