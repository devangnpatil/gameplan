const initState = {
    authError: null
}
const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log('Login failed');
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_SUCCESS':
            console.log('SIGNUP Success');
            return {
                ...state,
                authError: null
            }
            case 'SIGNUP_ERROR':
                console.log('SIGNUP failed');
                return {
                    ...state,
                    authError: action.err.message
                }
        case 'SIGNOUT_SUCCESS':
            console.log('SIGN OUT Success');
            return state
        default:
            return state
    }
}

export default authReducer;