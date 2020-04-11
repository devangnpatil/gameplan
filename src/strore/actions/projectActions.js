export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call and dispatch()
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: "Dev",
            authorLastName: "Pat",
            authorId: '1234',
            createAt: new Date()
        }).then(()=>{
            dispatch({
                type: 'CREATE_PROJECT',
                project
            })
        }).catch((err)=>{
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                err
            })
        })

    }
};