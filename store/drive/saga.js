import { ADD_DRIVE_DETAILS, ADD_STUDENT_DETAILS, GET_ANALYTICS, GET_DRIVE_DETAILS, GET_STUDENT_DETAILS, GET_STUDENT_DETAILS_FAILURE, GET_STUDENT_DETAILS_INIT, GET_STUDENT_DETAILS_SUCCESS, UPDATE_DRIVE_DETAILS, UPDATE_STUDENT_DETAILS } from './actionTypes';
import { takeEvery,  fork,  put,  all,  call,  takeLatest } from 'redux-saga/effects'
import { addDriveDetails, addStudentDetails, getAnalytics, getDrivesDetailsData, getStudentsDetailsData, updateDriveDetails, updateStudentDetails } from '../../services/vaccDriveServices';
import { addDriveDetailFailure, addDriveDetailSuccess, addStudentDetailFailure, addStudentDetailSuccess, getAnalyticsDataFailure, getAnalyticsDataSuccess, getDriveDetailsFailure, getDriveDetailsSuccess, getStudentsDetailsFailure, getStudentsDetailsSuccess, updateDriveDetailFailure, updateDriveDetailSuccess, updateStudentDetailFailure, updateStudentDetailSuccess } from './actions';

function* fetchAnalyticsData(action){
    try{
        const response = yield call (
            getAnalytics,
            action.payload
        )
        if(response.status === 200){
            yield put(getAnalyticsDataSuccess(response.data.output))
        }
        else{
            yield put(getAnalyticsDataFailure(response.data.message))
            console.error(response)
        }
    }
    catch(error){
        yield put(getAnalyticsDataFailure(error))
        console.error(error);
    }
}

function* fetchCityData(action){
    try{
        const response = yield call (
            getStudentsDetailsData,
            action.payload
        )
        if(response.status === 200){
            yield put(getStudentsDetailsSuccess(response.data.output))
        }
        else{
            yield put(getStudentsDetailsFailure(response.data.message))
            console.error(response)
        }
    }
    catch(error){
        yield put(getStudentsDetailsFailure(error))
        console.error(error);
    }
}

function* fetchDriveData(action){
    try{
        const response = yield call (
            getDrivesDetailsData,
            action.payload
        )
        if(response.status === 200){
            yield put(getDriveDetailsSuccess(response.data.output))
        }
        else{
            yield put(getDriveDetailsFailure(response.data.message))
            console.error(response)
        }
    }
    catch(error){
        yield put(getDriveDetailsFailure(error))
        console.error(error);
    }
}

function* putStudentData(action){
    try{
        const response = yield call (
            addStudentDetails,
            action.payload
        )
        if(response.status === 200){
            yield put(addStudentDetailSuccess(response.data.output))
        }
        else{
            yield put(addStudentDetailFailure(response.data.message))
            console.error(response)
        }
    }
    catch(error){
        yield put(addStudentDetailFailure(error))
        console.error(error);
    }
}

function* putDriveDetails(action){
    try{
        const response = yield call (
            addDriveDetails,
            action.payload
        )
        if(response.status === 200){
            yield put(addDriveDetailSuccess(response.data.output))
        }
        else{
            yield put(addDriveDetailFailure(response.data.message))
            console.error(response)
        }
    }
    catch(error){
        yield put(addDriveDetailFailure(error))
        console.error(error);
    }
}

function* patchStudentDetails(action){
    try{
        const response = yield call (
            updateStudentDetails,
            action.payload
        )
        if(response.status === 200){
            yield put(updateStudentDetailSuccess(response.data.output))
        }
        else{
            yield put(updateStudentDetailFailure(response.data.message))
            console.error(response)
        }
    }
    catch(error){
        yield put(updateStudentDetailFailure(error))
        console.error(error);
    }
}

function* patchDriveDetails(action){
    try{
        const response = yield call (
            updateDriveDetails,
            action.payload
        )
        if(response.status === 200){
            yield put(updateDriveDetailSuccess(response.data.output))
        }
        else{
            yield put(updateDriveDetailFailure(response.data.message))
            console.error(response)
        }
    }
    catch(error){
        yield put(updateDriveDetailFailure(error))
        console.error(error);
    }
}


export function* watchGetAnalyticsData(){
    yield takeLatest(GET_ANALYTICS, fetchAnalyticsData)
}
export function* watchGetStudentDetails(){
    yield takeLatest(GET_STUDENT_DETAILS, fetchCityData)
}
export function* watchGetDriveData(){
    yield takeLatest(GET_DRIVE_DETAILS, fetchDriveData)
}
export function* watchAddStudentDetails(){
    yield takeLatest(ADD_STUDENT_DETAILS, putStudentData)
}
export function* watchAddDriveDetails(){
    yield takeLatest(ADD_DRIVE_DETAILS, putDriveDetails)
}
export function* watchUpdateStudentDetails(){
    yield takeLatest(UPDATE_STUDENT_DETAILS, patchStudentDetails)
}
export function* watchUpdateDriveDetails(){
    yield takeLatest(UPDATE_DRIVE_DETAILS, patchDriveDetails)
}

function* VaccDriveSaga(){
    yield all([
        fork(watchGetAnalyticsData),
        fork(watchGetStudentDetails),
        fork(watchGetDriveData),
        fork(watchAddStudentDetails),
        fork(watchAddDriveDetails),
        fork(watchUpdateStudentDetails),
        fork(watchUpdateDriveDetails),
    ])
}

export default VaccDriveSaga
