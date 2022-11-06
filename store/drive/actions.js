import { ADD_DRIVE_DETAILS, ADD_DRIVE_DETAILS_FAILURE, ADD_DRIVE_DETAILS_INIT, ADD_DRIVE_DETAILS_SUCCESS, ADD_STUDENT_DETAILS, ADD_STUDENT_DETAILS_FAILURE, ADD_STUDENT_DETAILS_INIT, ADD_STUDENT_DETAILS_SUCCESS, GET_ANALYTICS, GET_ANALYTICS_FAILURE, GET_ANALYTICS_INIT, GET_ANALYTICS_SUCCESS, GET_DRIVE_DETAILS, GET_DRIVE_DETAILS_FAILURE, GET_DRIVE_DETAILS_INIT, GET_DRIVE_DETAILS_SUCCESS, GET_STUDENT_DETAILS, GET_STUDENT_DETAILS_FAILURE, GET_STUDENT_DETAILS_INIT, GET_STUDENT_DETAILS_SUCCESS, UPDATE_DRIVE_DETAILS, UPDATE_DRIVE_DETAILS_FAILURE, UPDATE_DRIVE_DETAILS_INIT, UPDATE_DRIVE_DETAILS_SUCCESS, UPDATE_STUDENT_DETAILS, UPDATE_STUDENT_DETAILS_FAILURE, UPDATE_STUDENT_DETAILS_INIT, UPDATE_STUDENT_DETAILS_SUCCESS } from './actionTypes';

// Actions to get analytics for database
export const getAnalyticsData = (data) => {
    return{
        type: GET_ANALYTICS,
        payload: data
    }
}
export const getAnalyticsDataSuccess = (data) => {
    return{
        type: GET_ANALYTICS_SUCCESS,
        payload: data
    }
}

export const getAnalyticsDataFailure = (data) => {
    return{
        type: GET_ANALYTICS_FAILURE,
        payload: data
    }
}

export const getAnalyticsDataInit = (data) => {
    return{
        type: GET_ANALYTICS_INIT,
        payload: data
    }
}

// Actions to get list of students and their drive details
export const getStudentsDetails = (data) => {
    return{
        type: GET_STUDENT_DETAILS,
        payload: data
    }
}
export const getStudentsDetailsSuccess = (data) => {
    return{
        type: GET_STUDENT_DETAILS_SUCCESS,
        payload: data
    }
}

export const getStudentsDetailsFailure = (data) => {
    return{
        type: GET_STUDENT_DETAILS_FAILURE,
        payload: data
    }
}

export const getStudentsDetailsInit = (data) => {
    return{
        type: GET_STUDENT_DETAILS_INIT,
        payload: data
    }
}

// Actions to get list of drives in the database
export const getDriveDetails = (data) => {
    return{
        type: GET_DRIVE_DETAILS,
        payload: data
    }
}
export const getDriveDetailsSuccess = (data) => {
    return{
        type: GET_DRIVE_DETAILS_SUCCESS,
        payload: data
    }
}

export const getDriveDetailsFailure = (data) => {
    return{
        type: GET_DRIVE_DETAILS_FAILURE,
        payload: data
    }
}

export const getDriveDetailsInit = (data) => {
    return{
        type: GET_DRIVE_DETAILS_INIT,
        payload: data
    }
}

// Actions to add student details in database
export const addStudentDetail = (data) => {
    return{
        type: ADD_STUDENT_DETAILS,
        payload: data
    }
}
export const addStudentDetailSuccess = (data) => {
    return{
        type: ADD_STUDENT_DETAILS_SUCCESS,
        payload: data
    }
}

export const addStudentDetailFailure = (data) => {
    return{
        type: ADD_STUDENT_DETAILS_FAILURE,
        payload: data
    }
}

export const addStudentDetailInit = (data) => {
    return{
        type: ADD_STUDENT_DETAILS_INIT,
        payload: data
    }
}

// Actions to add drive details in database
export const addDriveDetail = (data) => {
    return{
        type: ADD_DRIVE_DETAILS,
        payload: data
    }
}
export const addDriveDetailSuccess = (data) => {
    return{
        type: ADD_DRIVE_DETAILS_SUCCESS,
        payload: data
    }
}

export const addDriveDetailFailure = (data) => {
    return{
        type: ADD_DRIVE_DETAILS_FAILURE,
        payload: data
    }
}

export const addDriveDetailInit = (data) => {
    return{
        type: ADD_DRIVE_DETAILS_INIT,
        payload: data
    }
}

// Actions to update student details in database
export const updateStudentDetail = (data) => {
    return{
        type: UPDATE_STUDENT_DETAILS,
        payload: data
    }
}
export const updateStudentDetailSuccess = (data) => {
    return{
        type: UPDATE_STUDENT_DETAILS_SUCCESS,
        payload: data
    }
}

export const updateStudentDetailFailure = (data) => {
    return{
        type: UPDATE_STUDENT_DETAILS_FAILURE,
        payload: data
    }
}

export const updateStudentDetailInit = (data) => {
    return{
        type: UPDATE_STUDENT_DETAILS_INIT,
        payload: data
    }
}

// Actions to update drive details in database
export const updateDriveDetail = (data) => {
    return{
        type: UPDATE_DRIVE_DETAILS,
        payload: data
    }
}
export const updateDriveDetailSuccess = (data) => {
    return{
        type: UPDATE_DRIVE_DETAILS_SUCCESS,
        payload: data
    }
}

export const updateDriveDetailFailure = (data) => {
    return{
        type: UPDATE_DRIVE_DETAILS_FAILURE,
        payload: data
    }
}

export const updateDriveDetailInit = (data) => {
    return{
        type: UPDATE_DRIVE_DETAILS_INIT,
        payload: data
    }
}
