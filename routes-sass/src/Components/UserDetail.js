import React from 'react'
import { useParams, useRouteMatch, Link, Route } from 'react-router-dom'

export default function UserDetail({ match }) {
    //Gets the :id from the url
    /* let match = useParams()
    console.log(match.id) */

    let { id } = useParams()

    // NESTING: The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    const { path, url } = useRouteMatch();
    console.log('Path: ', path, 'URL: ', url)

    return (
        <div>
            <h1>Users Detail {id}</h1>
            <Link to={`${url}`}>Props v. State</Link>
            <Route path={`${path}/:id`}>
                {/* Go to a nested component */}
            </Route>
        </div>
    )
}
