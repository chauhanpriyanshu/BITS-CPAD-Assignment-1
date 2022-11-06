import { ADD_DRIVE_DETAILS, ADD_DRIVE_DETAILS_FAILURE, ADD_DRIVE_DETAILS_INIT, ADD_DRIVE_DETAILS_SUCCESS, ADD_STUDENT_DETAILS, ADD_STUDENT_DETAILS_FAILURE, ADD_STUDENT_DETAILS_INIT, ADD_STUDENT_DETAILS_SUCCESS, GET_ANALYTICS, GET_ANALYTICS_FAILURE, GET_ANALYTICS_INIT, GET_ANALYTICS_SUCCESS, GET_DRIVE_DETAILS, GET_DRIVE_DETAILS_FAILURE, GET_DRIVE_DETAILS_INIT, GET_DRIVE_DETAILS_SUCCESS, GET_STUDENT_DETAILS, GET_STUDENT_DETAILS_FAILURE, GET_STUDENT_DETAILS_INIT, GET_STUDENT_DETAILS_SUCCESS, UPDATE_DRIVE_DETAILS, UPDATE_DRIVE_DETAILS_FAILURE, UPDATE_DRIVE_DETAILS_INIT, UPDATE_DRIVE_DETAILS_SUCCESS, UPDATE_STUDENT_DETAILS, UPDATE_STUDENT_DETAILS_FAILURE, UPDATE_STUDENT_DETAILS_INIT, UPDATE_STUDENT_DETAILS_SUCCESS } from './actionTypes';

const initialState = {
    analyticsData: null,
    studentData: null,
    vaccinationData: null,
    totalVaccinatedStudents: 0,
    getAnalyticsSuccess: false,
    getAnalyticsFailure: false,
    getStudentDetailsSuccess: false,
    getStudentDetailsFailure: false,
    getDriveDetailsSuccess: false,
    getDriveDetailsFailure: false,
    addStudentDetailsSuccess: false,
    addStudentDetailsFailure: false,
    addDriveDetailsSuccess: false,
    addDriveDetailsFailure: false,
    updateStudentDetailsSuccess: false,
    updateStudentDetailsFailure: false,
    updateDriveDetailsSuccess: false,
    updateDriveDetailsFailure: false,
    isLoading: false,
    errorMessage: ''
}

const VaccDrive = (state = initialState, action) => {
    switch (action.type) {
        case GET_ANALYTICS:
            return {
                ...state,
                getAnalyticsSuccess: false,
                getAnalyticsFailure: false,
                isLoading: true
            }
        case GET_ANALYTICS_SUCCESS:
            let respAnalytics = action.payload;
            let dataAnalytics = {
                "totalStudents": respAnalytics[0],
                "totalVaccinated": respAnalytics[1],
                "totalNotVaccinated": respAnalytics[2],
            }
            return {
                ...state,
                getAnalyticsSuccess: true,
                getAnalyticsFailure: false,
                analyticsData: dataAnalytics
            }
        case GET_ANALYTICS_FAILURE:
            return {
                ...state,
                getAnalyticsSuccess: false,
                getAnalyticsFailure: true,
                errorMessage: action.payload
            }
        case GET_ANALYTICS_INIT:
            return {
                ...state,
                getAnalyticsSuccess: false,
                getAnalyticsFailure: false,
                isLoading: false
            }
        case GET_STUDENT_DETAILS:
            return {
                ...state,
                getStudentDetailsSuccess: false,
                getStudentDetailsFailure: false,
                isLoading: true
            }
        case GET_STUDENT_DETAILS_SUCCESS:
            let resp = action.payload;
            let data = []
            let totalVaccinated = 0;
            resp.map((item,index)=>{
                if(item[2]=="yes"){
                    totalVaccinated++
                }
                data.push({
                    "name": item[0],
                    "vaccinationDate": item[1],
                    "isVaccinated": item[2],
                    "vaccineName": item[3]
                })
            })
            return {
                ...state,
                totalVaccinatedStudents: totalVaccinated,
                getStudentDetailsSuccess: true,
                getStudentDetailsFailure: false,
                studentData: data
            }
        case GET_STUDENT_DETAILS_FAILURE:
            return {
                ...state,
                getStudentDetailsSuccess: false,
                getStudentDetailsFailure: true,
                errorMessage: action.payload
            }
        case GET_STUDENT_DETAILS_INIT:
            return {
                ...state,
                getStudentDetailsSuccess: false,
                getStudentDetailsFailure: false,
                isLoading: false
            }

        case GET_DRIVE_DETAILS:
            return {
                ...state,
                getDriveDetailsSuccess: false,
                getDriveDetailsFailure: false,
                isLoading: true
            }
        case GET_DRIVE_DETAILS_SUCCESS:
            let resp2 = action.payload;
            let data2 = []
            resp2.map((item,index)=>{
                data2.push({
                    "name": item[0],
                    "vaccinationDate": item[1],
                    "vaccinationCount": item[2],
                    "vaccinationUsed": item[3]
                })
            })
            return {
                ...state,
                getDriveDetailsSuccess: true,
                getDriveDetailsFailure: false,
                vaccinationData: data2
            }
        case GET_DRIVE_DETAILS_FAILURE:
            return {
                ...state,
                getDriveDetailsSuccess: false,
                getDriveDetailsFailure: true,
                errorMessage: action.payload
            }
        case GET_DRIVE_DETAILS_INIT:
            return {
                ...state,
                getDriveDetailsSuccess: false,
                getDriveDetailsFailure: false,
                isLoading: false
            }

        case ADD_STUDENT_DETAILS:
            return {
                ...state,
                addStudentDetailsSuccess: false,
                addStudentDetailsFailure: false,
                isLoading: true
            }
        case ADD_STUDENT_DETAILS_SUCCESS:
            return {
                ...state,
                addStudentDetailsSuccess: true,
                addStudentDetailsFailure: false,
            }
        case ADD_STUDENT_DETAILS_FAILURE:
            return {
                ...state,
                addStudentDetailsSuccess: false,
                addStudentDetailsFailure: true,
                errorMessage: action.payload
            }
        case ADD_STUDENT_DETAILS_INIT:
            return {
                ...state,
                addStudentDetailsSuccess: false,
                addStudentDetailsFailure: false,
                isLoading: false
            }

        case ADD_DRIVE_DETAILS:
            return {
                ...state,
                addDriveDetailsSuccess: false,
                addDriveDetailsFailure: false,
                isLoading: true
            }
        case ADD_DRIVE_DETAILS_SUCCESS:
            return {
                ...state,
                addDriveDetailsSuccess: true,
                addDriveDetailsFailure: false,
            }
        case ADD_DRIVE_DETAILS_FAILURE:
            return {
                ...state,
                addDriveDetailsSuccess: false,
                addDriveDetailsFailure: true,
                errorMessage: action.payload
            }
        case ADD_DRIVE_DETAILS_INIT:
            return {
                ...state,
                addDriveDetailsSuccess: false,
                addDriveDetailsFailure: false,
                isLoading: false
            }

        case UPDATE_STUDENT_DETAILS:
            return {
                ...state,
                updateStudentDetailsSuccess: false,
                updateStudentDetailsFailure: false,
                isLoading: true
            }
        case UPDATE_STUDENT_DETAILS_SUCCESS:
            return {
                ...state,
                updateStudentDetailsSuccess: true,
                updateStudentDetailsFailure: false,
            }
        case UPDATE_STUDENT_DETAILS_FAILURE:
            return {
                ...state,
                updateStudentDetailsSuccess: false,
                updateStudentDetailsFailure: true,
                errorMessage: action.payload
            }
        case UPDATE_STUDENT_DETAILS_INIT:
            return {
                ...state,
                updateStudentDetailsSuccess: false,
                updateStudentDetailsFailure: false,
                isLoading: false
            }

        case UPDATE_DRIVE_DETAILS:
            return {
                ...state,
                updateDriveDetailsSuccess: false,
                updateDriveDetailsFailure: false,
                isLoading: true
            }
        case UPDATE_DRIVE_DETAILS_SUCCESS:
            return {
                ...state,
                updateDriveDetailsSuccess: true,
                updateDriveDetailsFailure: false,
            }
        case UPDATE_DRIVE_DETAILS_FAILURE:
            return {
                ...state,
                updateDriveDetailsSuccess: false,
                updateDriveDetailsFailure: true,
                errorMessage: action.payload
            }
        case UPDATE_DRIVE_DETAILS_INIT:
            return {
                ...state,
                updateDriveDetailsSuccess: false,
                updateDriveDetailsFailure: false,
                isLoading: false
            }
        default:
            return state
    }
}

export default VaccDrive
