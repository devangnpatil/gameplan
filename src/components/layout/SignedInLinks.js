import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const SignedInLinks = () => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to="/create">New Project</NavLink></li>
                <li><NavLink to="/">Logout</NavLink></li>
                <li><NavLink to="/" className="btn btn-floating pink lighten-1">DP</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedInLinks;