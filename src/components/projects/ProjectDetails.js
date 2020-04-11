import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    console.log(id);
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title</span>
                    <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum orem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Devang Patil</div>
                    <div>10th April 2020</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails