import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetail({ match }) {
    //Gets the :id from the url
    /* let match = useParams()
    console.log(match.id) */

    let { id } = useParams()
    return (
        <div>
            Users Detail {id}
        </div>
    )
}
