import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../strore/actions/authActions';
const SignedInLinks = (props) => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to="/create">New Project</NavLink></li>
                <li><a to="/" onClick={props.signOut}>Logout</a></li>
                <li><NavLink to="/" className="btn btn-floating pink lighten-1">DP</NavLink></li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: ()=> {
            dispatch(signOut())
        }
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);