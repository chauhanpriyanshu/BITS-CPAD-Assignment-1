import { LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_INIT, LOGIN_USER_SUCCESS } from "./actionTypes"


// Actions to login user
export const loginUser = (data) => {
    return{
        type: LOGIN_USER,
        payload: data
    }
}
export const loginUserSuccess = (data) => {
    return{
        type: LOGIN_USER_SUCCESS,
        payload: data
    }
}

export const loginUserFailure = (data) => {
    return{
        type: LOGIN_USER_FAILURE,
        payload: data
    }
}

export const loginUserInit = (data) => {
    return{
        type: LOGIN_USER_INIT,
        payload: data
    }
}