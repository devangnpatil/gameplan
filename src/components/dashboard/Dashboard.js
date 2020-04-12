import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import {compose} from 'redux'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'
export class Dashboard extends Component {
    render() {
        const {project, auth, notifications} = this.props;
        
        if(!auth.uid) return <Redirect to='/signin'/>
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={project}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        project: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' },
        { collection: 'notifications', limit: 3 }
    ])
)(Dashboard)
