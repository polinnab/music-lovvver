import { all, fork } from "redux-saga/effects";
import { loginWatcher } from "./loginSaga";
import { registrationWatcher } from "./registrationSaga";
import { usersWatcher } from "./usersSaga";

const allSagas = [
    fork(registrationWatcher),
    fork(usersWatcher),
    fork(loginWatcher)
]

export function* rootSagaWatcher() {
    yield all(allSagas)
}