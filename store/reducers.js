import { combineReducers } from "redux"
import VaccDrive from "./drive/reducer"
import Auth from './auth/reducer';


const rootReducer = combineReducers({
    VaccDrive,
    Auth
})

export default rootReducer
