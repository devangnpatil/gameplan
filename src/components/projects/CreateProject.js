import React, { Component } from 'react'
import {createProject} from '../../strore/actions/projectActions'
import {connect} from 'react-redux';
class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
        this.props.createProject(this.state);

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <form className="" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink light-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)
