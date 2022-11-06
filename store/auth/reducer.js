import { LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_INIT, LOGIN_USER_SUCCESS } from "./actionTypes"

const initialState = {
    loginUserSuccess: false,
    loginUserFailure: false,
    isLoading: false,
    errorMessage: ''
}

const Auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                loginUserSuccess: false,
                loginUserFailure: false,
                isLoading: true
            }
        case LOGIN_USER_SUCCESS:

            return {
                ...state,
                loginUserSuccess: true,
                loginUserFailure: false,
            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                loginUserSuccess: false,
                loginUserFailure: true,
            }
        case LOGIN_USER_INIT:
            return {
                ...state,
                loginUserSuccess: false,
                loginUserFailure: false,
                isLoading: false
            }

        default:
            return state
    }
}

export default Auth
