import React, { useState } from 'react'

function StateDrill(props) {
    return (
        <div>
            <p>
                State drilling lvl 2: {props.drill2[0].title}
            </p>
        </div>
    )
}

export default StateDrill