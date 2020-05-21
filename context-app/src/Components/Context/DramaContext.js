//Method 2 - legacy
import React, { Component } from 'react'

//init new Context
const DramaContext = React.createContext();

//Provider Component
export class DramaProvider extends Component {
    //whole state
    state =
        {
            dramas: [
                { id: 1, title: "Drama 1", btnText: "click me 1" },
                { id: 2, title: "Drama 2", btnText: "click me 2" },
                { id: 3, title: "Drama 3", btnText: "click me 3" }
            ]
        }

    //Return context provider
    render() {
        return (
            <DramaContext.Provider value={this.state}>
                {this.props.children}
            </DramaContext.Provider>
        )
    }
}

export const DramaConsumer = DramaContext.Consumer
