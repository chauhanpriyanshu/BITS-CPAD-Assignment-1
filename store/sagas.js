import { all, fork } from "redux-saga/effects"
import AuthSaga from "./auth/saga"
import VaccDriveSaga from "./drive/saga"

export default function* rootSaga() {
  yield all([
    fork(VaccDriveSaga),
    fork(AuthSaga),
  ])
}
