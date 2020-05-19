import React, { Component } from 'react'
import StateDrill from './StateDrill'
import PropTypes from 'prop-types'

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
        const { title, drill } = this.props
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
        //Dynamic Styling
        const getStyle = () => {
            return {
                color: 'red',
                textDecoration: this.state.btnText == 'click me 1' ? 'none' : 'line-through'
            }
        }

        return (
            <div style={{ backgroundColor: 'grey' }} className='movieStyling'>
                <b style={titleStyle}>{title}</b>
                <button onClick={updateButton} style={getStyle()}>{this.state.btnText}</button>
                <input type="text" name='name' onChange={updateName} />
                onChange: {name}
                <button onClick={handleSubmit}>Submit</button>
                <StateDrill drill2={drill} />{/* Passing state down 2 levels */}
            </div>
        )
    }
}

//Styling
const titleStyle = {
    color: 'darkRed'
}

//PropTypes
MovieClass.propTypes = {
    title: PropTypes.string.isRequired,
    drill: PropTypes.array.isRequired,
    name: PropTypes.string
}

export default MovieClass

