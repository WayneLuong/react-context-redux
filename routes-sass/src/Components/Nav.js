import React from 'react'
import About from './About'
import Users from './Users'
import UserDetail from './UserDetail'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Nav = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/users/1">Users 1</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    {/* Specify exact url or user detail will be shown instead */}
                    <Route exact path="/users">
                        <Users />
                    </Route>
                    {/* Specifies any params shown after /users/ to go to this page, for dynamic urls (:id :slug) */}
                    <Route path="/users/:id">
                        <UserDetail />
                    </Route>
                </Switch>
            </nav>
        </Router>
    )
}
export default Nav
