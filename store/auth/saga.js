import { LOGIN_USER } from './actionTypes';
import { takeEvery,  fork,  put,  all,  call,  takeLatest } from 'redux-saga/effects'
import { authentication } from '../../services/authServices';
import { loginUserFailure, loginUserSuccess } from './actions';

function* loginAppUser(action){
    try{
        const response = yield call (
            authentication,
            action.payload
        )
        if(response.status === 200){
            yield put(loginUserSuccess(response.data.output))
        }
        else{
            yield put(loginUserFailure(response.data.message))
            console.error(response)
        }
    }
    catch(error){
        yield put(loginUserFailure(error))
        console.error(error);
    }
}

export function* watchLoginUser(){
    yield takeLatest(LOGIN_USER, loginAppUser)
}

function* AuthSaga(){
    yield all([
        fork(watchLoginUser),
    ])
}

export default AuthSaga