//Method 1
import React, { useState, createContext } from 'react'

export const DramaContext = createContext()

export const DramaProvider = (props) => {

    const [dramas, setDramas] = useState([
        { id: 1, title: "Drama 1", btnText: "click me 1" },
        { id: 2, title: "Drama 2", btnText: "click me 2" },
        { id: 3, title: "Drama 3", btnText: "click me 3" }
    ])

    return (
        <DramaContext.Provider value={[dramas, setDramas]}>
            {props.children}
        </DramaContext.Provider>
    )
}
